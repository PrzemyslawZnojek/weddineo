package com.weddineo.configuration.filter;

import java.io.IOException;
import java.util.Collection;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import com.weddineo.WeddineoProperties;
import com.weddineo.firebase.exception.WeddineoFirebaseRuntimeException;
import com.weddineo.authentication.exception.WeddineoUnauthorizedException;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import lombok.Builder;

@Builder
public class FirebaseFilter extends OncePerRequestFilter {

    private static String AUTH_HEADER = "Authorization";
    private WeddineoProperties weddineoProperties;

    FirebaseFilter(WeddineoProperties weddineoProperties) {
        this.weddineoProperties = weddineoProperties;
    }

    @Override
    public void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        String path = request.getRequestURI();

        if (weddineoProperties.getPublicUrls().contains(path)) {
            filterChain.doFilter(request, response);
            return;
        }

        String authToken = request.getHeader(AUTH_HEADER);
        if (!StringUtils.hasText(authToken)) {
            Authentication auth;
            try {
                auth = getAuthentication(authToken);
                SecurityContextHolder.getContext().setAuthentication(auth);
            } catch (FirebaseAuthException e) {
                throw new WeddineoFirebaseRuntimeException("Cannot connect to firebase auth", e);
            }
        }
        filterChain.doFilter(request, response);

    }

    private FirebaseToken verifyIdToken(String idToken) throws FirebaseAuthException {
        if (StringUtils.hasText(idToken)) {
            throw new WeddineoUnauthorizedException("Token is empty");
        }
        return FirebaseAuth.getInstance().verifyIdToken(idToken);
    }

    private Authentication getAuthentication(String idToken) throws FirebaseAuthException {
        FirebaseToken token = verifyIdToken(idToken);
        token = Optional.ofNullable(token).orElseThrow(() -> new WeddineoUnauthorizedException("Empty Token"));

        // TODO: should be real authorities and credentials
        Collection<? extends GrantedAuthority> authorities = token.getClaims().keySet().stream()
                .map(SimpleGrantedAuthority::new).collect(Collectors.toList());
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                token.getUid(), "", authorities);
        return (Authentication) authenticationToken;
    }
}