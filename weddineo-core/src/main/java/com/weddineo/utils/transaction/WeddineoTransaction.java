package com.weddineo.utils.transaction;

import java.util.ArrayList;
import java.util.List;

public class WeddineoTransaction {

    private List<WeddineoAtomicOperation> operations;

    private List<WeddineoAtomicOperation> done = new ArrayList<>();

    public WeddineoTransaction(List<WeddineoAtomicOperation> operations) {
        this.operations = operations;
    }

    public void perform() throws WeddineoTransactionFailedException, WeddineoRollbackFailedException {
        for (WeddineoAtomicOperation operation : operations) {
            executeSingleOperation(operation);
        }
    }

    private void executeSingleOperation(WeddineoAtomicOperation atomicOperation) throws WeddineoTransactionFailedException, WeddineoRollbackFailedException {
        try {
            atomicOperation.getOperation().execute();
        } catch (Exception ex) {
            rollbackDoneOperations();
            throw new WeddineoTransactionFailedException(atomicOperation.getId(),
                    "Operation Failed ID: " + atomicOperation.getId(),
                    ex);
        }
        done.add(atomicOperation);
    }

    private void rollbackDoneOperations() throws WeddineoRollbackFailedException {
        for (WeddineoAtomicOperation operation :
                done) {
            try {
                operation.getRollback().execute();
            } catch (Exception ex) {
                throw new WeddineoRollbackFailedException(
                        operation.getId(),
                        "Rollback for operation failed, operation ID: " + operation.getId(),
                        ex
                );
            }
        }
    }
}
