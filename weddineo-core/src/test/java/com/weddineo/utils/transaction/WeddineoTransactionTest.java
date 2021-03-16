package com.weddineo.utils.transaction;

import lombok.SneakyThrows;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.HashMap;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;

class WeddineoTransactionTest {

    private HashMap<String, String> executionRestults;

    private HashMap<String, WeddineoAtomicOperation> predefinedOperations;

    private WeddineoAtomicOperation operation_1_no_error = new WeddineoAtomicOperation(
            "OP_1",
            () -> executionRestults.put("OP_1", "SUCCESS"),
            () -> executionRestults.put("OP_1_ROLLBACK", "DONE")
    );

    private WeddineoAtomicOperation operation_2_no_error = new WeddineoAtomicOperation(
            "OP_2",
            () -> executionRestults.put("OP_2", "SUCCESS"),
            () -> executionRestults.put("OP_2_ROLLBACK", "DONE")
    );

    private WeddineoAtomicOperation operation_3_no_error = new WeddineoAtomicOperation(
            "OP_3",
            () -> executionRestults.put("OP_3", "SUCCESS"),
            () -> executionRestults.put("OP_3_ROLLBACK", "DONE")
    );

    private WeddineoAtomicOperation operation_1_null_pointer_exception = new WeddineoAtomicOperation(
            "OP_1",
            () -> { throw new NullPointerException(); },
            () -> executionRestults.put("OP_1_ROLLBACK", "DONE")
    );

    private WeddineoAtomicOperation operation_2_null_pointer_exception = new WeddineoAtomicOperation(
            "OP_2",
            () -> { throw new NullPointerException(); },
            () -> executionRestults.put("OP_2_ROLLBACK", "DONE")
    );

    private WeddineoAtomicOperation operation_3_null_pointer_exception = new WeddineoAtomicOperation(
            "OP_3",
            () -> { throw new NullPointerException(); },
            () -> executionRestults.put("OP_3_ROLLBACK", "DONE")
    );

    private WeddineoAtomicOperation operation_rollback_failed_due_to_null_pointer_exception = new WeddineoAtomicOperation(
            "OP_ROLLBACK_FAIL",
            () -> {},
            () -> { throw new NullPointerException(); }
    );

    @BeforeEach
    void before() {
        executionRestults = new HashMap<>();
    }

    @Test
    @SneakyThrows
    void transaction_with_no_errors_should_execute_all_given_operations() {
        List<WeddineoAtomicOperation> operationsList = List.of(
                operation_1_no_error, operation_2_no_error, operation_3_no_error
        );
        new WeddineoTransaction(operationsList).perform();
        assertThat(executionRestults).containsEntry("OP_1", "SUCCESS");
        assertThat(executionRestults).containsEntry("OP_1", "SUCCESS");
        assertThat(executionRestults).containsEntry("OP_1", "SUCCESS");
    }

    @Test
    @SneakyThrows
    void transaction_with_no_errors_should_NOT_execute_any_rollback_func() {
        List<WeddineoAtomicOperation> operationsList = List.of(
                operation_1_no_error, operation_2_no_error, operation_3_no_error
        );
        new WeddineoTransaction(operationsList).perform();

        assertThat(executionRestults).doesNotContainEntry("OP_1_ROLLBACK", "DONE");
        assertThat(executionRestults).doesNotContainEntry("OP_2_ROLLBACK", "DONE");
        assertThat(executionRestults).doesNotContainEntry("OP_3_ROLLBACK", "DONE");
    }
    @Test
    void when_first_operation_fails_transaction_transactions_stops_and_no_rollbacks_are_done() {
        List<WeddineoAtomicOperation> operationsList = List.of(
                operation_1_null_pointer_exception, operation_2_no_error, operation_3_no_error
        );
        WeddineoTransactionFailedException ex = assertThrows(
                WeddineoTransactionFailedException.class,
                () -> new WeddineoTransaction(operationsList).perform()
        );
        assertThat(ex.getOperationId()).isEqualTo("OP_1");
        assertThat(ex.getCause()).isInstanceOf(NullPointerException.class);

        assertThat(executionRestults).doesNotContainEntry("OP_1_ROLLBACK", "DONE");
        assertThat(executionRestults).doesNotContainEntry("OP_2_ROLLBACK", "DONE");
        assertThat(executionRestults).doesNotContainEntry("OP_3_ROLLBACK", "DONE");

        assertThat(executionRestults).doesNotContainEntry("OP_1", "SUCCESS");
        assertThat(executionRestults).doesNotContainEntry("OP_2", "SUCCESS");
        assertThat(executionRestults).doesNotContainEntry("OP_3", "SUCCESS");
    }

    @Test
    void when_second_operation_fails_transaction_transactions_stops_and_first_operation_is_rollbacked() {
        List<WeddineoAtomicOperation> operationsList = List.of(
                operation_1_no_error, operation_2_null_pointer_exception, operation_3_no_error
        );
        WeddineoTransactionFailedException ex = assertThrows(
                WeddineoTransactionFailedException.class,
                () -> new WeddineoTransaction(operationsList).perform()
        );
        assertThat(ex.getOperationId()).isEqualTo("OP_2");
        assertThat(ex.getCause()).isInstanceOf(NullPointerException.class);

        assertThat(executionRestults).containsEntry("OP_1_ROLLBACK", "DONE");
        assertThat(executionRestults).doesNotContainEntry("OP_2_ROLLBACK", "DONE");
        assertThat(executionRestults).doesNotContainEntry("OP_3_ROLLBACK", "DONE");

        assertThat(executionRestults).containsEntry("OP_1", "SUCCESS");
        assertThat(executionRestults).doesNotContainEntry("OP_2", "SUCCESS");
        assertThat(executionRestults).doesNotContainEntry("OP_3", "SUCCESS");
    }

    @Test
    void when_last_operation_fails_transaction_transactions_stops_and_all_previous_operations_are_rollbacked() {
        List<WeddineoAtomicOperation> operationsList = List.of(
                operation_1_no_error, operation_2_no_error, operation_3_null_pointer_exception
        );
        WeddineoTransactionFailedException ex = assertThrows(
                WeddineoTransactionFailedException.class,
                () -> new WeddineoTransaction(operationsList).perform()
        );
        assertThat(ex.getOperationId()).isEqualTo("OP_3");
        assertThat(ex.getCause()).isInstanceOf(NullPointerException.class);

        assertThat(executionRestults).containsEntry("OP_1_ROLLBACK", "DONE");
        assertThat(executionRestults).containsEntry("OP_2_ROLLBACK", "DONE");
        assertThat(executionRestults).doesNotContainEntry("OP_3_ROLLBACK", "DONE");

        assertThat(executionRestults).containsEntry("OP_1", "SUCCESS");
        assertThat(executionRestults).containsEntry("OP_2", "SUCCESS");
        assertThat(executionRestults).doesNotContainEntry("OP_3", "SUCCESS");
    }

    @Test
    void when_rollback_fails_proper_exception_is_thrown() {
        List<WeddineoAtomicOperation> operationsList = List.of(
                operation_rollback_failed_due_to_null_pointer_exception, operation_2_null_pointer_exception
        );
        WeddineoRollbackFailedException ex = assertThrows(
                WeddineoRollbackFailedException.class,
                () -> new WeddineoTransaction(operationsList).perform()
        );
        assertThat(ex.getOperationId()).isEqualTo("OP_ROLLBACK_FAIL");
        assertThat(ex.getCause()).isInstanceOf(NullPointerException.class);
    }
}