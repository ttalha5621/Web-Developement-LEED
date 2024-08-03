/* eslint-disable indent */
// const jwt = require('jsonwebtoken');

// const config = require('../../config');
const { ReasonPhrases } = require('http-status-codes');
const { StatusCodes } = require('http-status-codes');
const Model = require('../constants/response.constants');
const errorKeys = require('../constants/errorKeys.constant');

module.exports = (req, res) => {
    const key = req.body;
    const response = new Model();
    switch (key) {
        // NOTFOUND
        case errorKeys.NOT_FOUND:
            response.setStatus(ReasonPhrases.NOT_FOUND);
            response.setError('Data Not Found');
            return res.status(StatusCodes.NOT_FOUND).send(response);
        // BAD REQUEST
        case errorKeys.BAD_REQUEST:
            response.setStatus(ReasonPhrases.BAD_REQUEST);
            response.setError('Bad Request');
            return res.status(StatusCodes.BAD_REQUEST).send(response);
        // CONTINUE
        case errorKeys.CONTINUE:
            response.setStatus(ReasonPhrases.CONTINUE);
            response.setError('CONTINUE');
            return res.status(StatusCodes.CONTINUE).send(response);
        // SWITCHING PROTOCOL
        case errorKeys.SWITCHING_PROTOCOLS:
            response.setStatus(ReasonPhrases.SWITCHING_PROTOCOLS);
            response.setError('SWITCHING PROTOCOL');
            return res.status(StatusCodes.SWITCHING_PROTOCOLS).send(response);
        // PROCESSING
        case errorKeys.PROCESSING:
            response.setStatus(ReasonPhrases.PROCESSING);
            response.setError('Data Not Found');
            return res.status(StatusCodes.PROCESSING).send(response);
        // //OK
        // case errorKeys.OK:
        //     response.setStatus(ReasonPhrases.OK);
        //     response.setError("OK");
        //     return res.status(StatusCodes.OK).send(response);
        // CREATED
        // case errorKeys.CREATED:
        //     response.setStatus(ReasonPhrases.CREATED);
        //     response.setError("CREATED");
        //     return res.status(StatusCodes.CREATED).send(response);
        // ACCEPTED
        // case errorKey.ACCEPTED:
        //     response.setStatus(ReasonPhrases.ACCEPTED);
        //     response.setError("ACCEPTED");
        //     return res.status(StatusCodes.ACCEPTED).send(response);
        // NON AUTHORIATIVE INFORMATION
        case errorKeys.NON_AUTHORIATIVE_INFORMATION:
            response.setStatus(ReasonPhrases.NON_AUTHORITATIVE_INFORMATION);
            response.setError('NON AUTHORIATIVE INFORMATION');
            return res.status(StatusCodes.NON_AUTHORITATIVE_INFORMATION).send(response);
        // NO CONTENT
        case errorKeys.NO_CONTENT:
            response.setStatus(ReasonPhrases.NO_CONTENT);
            response.setError('NO CONTENT');
            return res.status(StatusCodes.NO_CONTENT).send(response);
        // RESET CONTENT
        case errorKeys.RESET_CONTENT:
            response.setStatus(ReasonPhrases.RESET_CONTENT);
            response.setError('RESET CONTENT');
            return res.status(StatusCodes.RESET_CONTENT).send(response);
        // PARTIAL CONTENT
        case errorKeys.PARTIAL_CONTENT:
            response.setStatus(ReasonPhrases.PARTIAL_CONTENT);
            response.setError('PARTIAL_CONTENT');
            return res.status(StatusCodes.PARTIAL_CONTENT).send(response);
        // MULTI STATUS
        case errorKeys.MULTI_STATUS:
            response.setStatus(ReasonPhrases.MULTI_STATUS);
            response.setError('MULTI STATUS');
            return res.status(StatusCodes.MULTI_STATUS).send(response);
        // ALREADY REPORTED
        case errorKeys.ALREADY_REPORTED:
            response.setStatus(ReasonPhrases.ALREADY_REPORTED);
            response.setError('ALREADY REPORTED');
            return res.status(StatusCodes.ALREADY_REPORTED).send(response);
        // IM USED
        case errorKeys.IM_USED:
            response.setStatus(ReasonPhrases.IM_USED);
            response.setError('IM USED');
            return res.status(StatusCodes.IM_USED).send(response);
        // MULTIPLE CHOICES
        case errorKeys.MULTIPLE_CHOICES:
            response.setStatus(ReasonPhrases.MULTIPLE_CHOICES);
            response.setError('MULTIPLE CHOICES');
            return res.status(StatusCodes.MULTIPLE_CHOICES).send(response);
        // MOVED PERMANENTLY
        case errorKeys.MOVED_PERMANENTLY:
            response.setStatus(ReasonPhrases.MOVED_PERMANENTLY);
            response.setError('MOVED PERMANENTLY');
            return res.status(StatusCodes.MOVED_PERMANENTLY).send(response);
        // FOUND
        case errorKeys.FOUND:
            response.setStatus(ReasonPhrases.FOUND);
            response.setError('FOUND');
            return res.status(StatusCodes.FOUND).send(response);
        // SEE OTHER
        case errorKeys.SEE_OTHER:
            response.setStatus(ReasonPhrases.SEE_OTHER);
            response.setError('SEE OTHER');
            return res.status(StatusCodes.SEE_OTHER).send(response);
        // NOT MODIFIED
        case errorKeys.NOT_MODIFIED:
            response.setStatus(ReasonPhrases.NOT_MODIFIED);
            response.setError('NOT MODIFIED');
            return res.status(StatusCodes.NOT_MODIFIED).send(response);
        // USE PROXY
        case errorKeys.USE_PROXY:
            response.setStatus(ReasonPhrases.USE_PROXY);
            response.setError('USE PROXY');
            return res.status(StatusCodes.USE_PROXY).send(response);
        // TEMPORARY REDIRECT
        case errorKeys.TEMPORARY_REDIRECT:
            response.setStatus(ReasonPhrases.TEMPORARY_REDIRECT);
            response.setError('TEMPORAY REDIRECT');
            return res.status(StatusCodes.TEMPORARY_REDIRECT).send(response);
        // PERMANENT REDIRECT
        case errorKeys.PERMANENT_REDIRECT:
            response.setStatus(ReasonPhrases.PERMANENT_REDIRECT);
            response.setError('PERMANENT REDIRECT');
            return res.status(StatusCodes.PERMANENT_REDIRECT).send(response);
        // UN AUTHORIZED
        case errorKeys.UNAUTHORIZED:
            response.setStatus(ReasonPhrases.UNAUTHORIZED);
            response.setError('UN AUTHORIZED');
            return res.status(StatusCodes.UNAUTHORIZED).send(response);
        // PAYMENT REQUIRED
        case errorKeys.PAYMENT_REQUIRED:
            response.setStatus(ReasonPhrases.PAYMENT_REQUIRED);
            response.setError('PAYMENT REQUIRED');
            return res.status(StatusCodes.PAYMENT_REQUIRED).send(response);
        // FORBIDDEN
        case errorKeys.FORBIDDEN:
            response.setStatus(ReasonPhrases.FORBIDDEN);
            response.setError('FORBIDDEN');
            return res.status(StatusCodes.FORBIDDEN).send(response);
        // METHOD NOT ALLOWED
        case errorKeys.METHOD_NOT_ALLOWED:
            response.setStatus(ReasonPhrases.METHOD_NOT_ALLOWED);
            response.setError('METHOD NOT ALLOWED');
            return res.status(StatusCodes.METHOD_NOT_ALLOWED).send(response);
        // NOT ACCEPTABLE
        case errorKeys.NOT_ACCEPTABLE:
            response.setStatus(ReasonPhrases.NOT_ACCEPTABLE);
            response.setError('NOT ACCEPTABLE');
            return res.status(StatusCodes.NOT_ACCEPTABLE).send(response);
        // PROXY AUTHENTICATION REQUIRED
        case errorKeys.PROXY_AUTHENTICATION_REQUIRED:
            response.setStatus(ReasonPhrases.PROXY_AUTHENTICATION_REQUIRED);
            response.setError('PROXY AUTHENTICATION REQUIRED');
            return res.status(StatusCodes.PROXY_AUTHENTICATION_REQUIRED).send(response);
        // REQUEST TIMEOUT
        case errorKeys.REQUEST_TIMEOUT:
            response.setStatus(ReasonPhrases.REQUEST_TIMEOUT);
            response.setError('REQUEST TIMEOUT ');
            return res.status(StatusCodes.REQUEST_TIMEOUT).send(response);
        // CONFLICT
        case errorKeys.CONFLICT:
            response.setStatus(ReasonPhrases.CONFLICT);
            response.setError('CONFLICT');
            return res.status(StatusCodes.CONFLICT).send(response);
        // GONE
        case errorKeys.GONE:
            response.setStatus(ReasonPhrases.GONE);
            response.setError('GONE');
            return res.status(StatusCodes.GONE).send(response);
        // LENGTH REQUIRED
        case errorKeys.LENGTH_REQUIRED:
            response.setStatus(ReasonPhrases.LENGTH_REQUIRED);
            response.setError('LENGTH REQUIRED');
            return res.status(StatusCodes.LENGTH_REQUIRED).send(response);
        // PRECONDITION FAILED
        case errorKeys.PRECONDITION_FAILED:
            response.setStatus(ReasonPhrases.PRECONDITION_FAILED);
            response.setError('PRE CONDITION FAILED ');
            return res.status(StatusCodes.PRECONDITION_FAILED).send(response);
        // PAYLOAD TOO LARGE
        case errorKeys.PAYLOAD_TOO_LARGE:
            response.setStatus(ReasonPhrases.PAYLOAD_TOO_LARGE);
            response.setError('PAYLOAD TOO LARGE');
            return res.status(StatusCodes.PAYLOAD_TOO_LARGE).send(response);
        // REQUEST URI TOO LONG
        case errorKeys.REQUEST_URI_TOO_LONG:
            response.setStatus(ReasonPhrases.REQUEST_URI_TOO_LONG);
            response.setError('REQUEST URI TOO LONG ');
            return res.status(StatusCodes.REQUEST_URI_TOO_LONG).send(response);
        // UNSUPPORTED MEDIA TYPE
        case errorKeys.UNSUPPORTED_MEDIA_TYPE:
            response.setStatus(ReasonPhrases.UNSUPPORTED_MEDIA_TYPE);
            response.setError('UN SUPPORTED MEDIA TYPE ');
            return res.status(StatusCodes.UNSUPPORTED_MEDIA_TYPE).send(response);
        // REQUEST RANGE NOT SATISFIABLE
        case errorKeys.REQUESTED_RANGE_NOT_SATISFIABLE:
            response.setStatus(ReasonPhrases.REQUESTED_RANGE_NOT_SATISFIABLE);
            response.setError('REQUEST RANGE NOT SATISFIABLE');
            return res.status(StatusCodes.REQUESTED_RANGE_NOT_SATISFIABLE).send(response);
        // EXPECTATION FAILED
        case errorKeys.EXPECTATION_FAILED:
            response.setStatus(ReasonPhrases.EXPECTATION_FAILED);
            response.setError('EXPECTATION FAILED');
            return res.status(StatusCodes.EXPECTATION_FAILED).send(response);
        // I AM TEAPOT
        case errorKeys.IM_A_TEAPOT:
            response.setStatus(ReasonPhrases.IM_A_TEAPOT);
            response.setError('I AM TEA POT ');
            return res.status(StatusCodes.IM_A_TEAPOT).send(response);
        // MISDIRECTED REQUEST
        case errorKeys.MIS_DIRECTED_REQUEST:
            response.setStatus(ReasonPhrases.MIS_DIRECTED_REQUEST);
            response.setError('MIS DIRECTED REQUEST');
            return res.status(StatusCodes.MIS_DIRECTED_REQUEST).send(response);
        // UNPROCESSABLE ENTITY
        case errorKeys.UNPROCESSABLE_ENTITY:
            response.setStatus(ReasonPhrases.UNPROCESSABLE_ENTITY);
            response.setError('UN PROCESSABLE ENTITY');
            return res.status(StatusCodes.UNPROCESSABLE_ENTITY).send(response);
        // LOCKED
        case errorKeys.LOCKED:
            response.setStatus(ReasonPhrases.LOCKED);
            response.setError('LOCKED');
            return res.status(StatusCodes.LOCKED).send(response);
        // FAILED DEPENDENCY
        case errorKeys.FAILED_DEPENDENCY:
            response.setStatus(ReasonPhrases.FAILED_DEPENDENCY);
            response.setError('FAILED DEPENDENCY');
            return res.status(StatusCodes.FAILED_DEPENDENCY).send(response);
        // UPGRADE REQUIRED
        case errorKeys.UPGRADE_REQUIRED:
            response.setStatus(ReasonPhrases.UPGRADE_REQUIRED);
            response.setError('UP GRADE REQUIRED');
            return res.status(StatusCodes.UPGRADE_REQUIRED).send(response);
        // PRECONDITION REQUIRED
        case errorKeys.PRECONDITION_REQUIRED:
            response.setStatus(ReasonPhrases.PRECONDITION_REQUIRED);
            response.setError('PRE CONDITION REQUIRED');
            return res.status(StatusCodes.PRECONDITION_REQUIRED).send(response);
        // TOO MANY REQUESTS
        case errorKeys.TOO_MANY_REQUESTS:
            response.setStatus(ReasonPhrases.TOO_MANY_REQUESTS);
            response.setError('TOO MANY REQUEST');
            return res.status(StatusCodes.TOO_MANY_REQUESTS).send(response);
        // REQUEST HEADER FIELD TOO LARGE
        case errorKeys.REQUEST_HEADER_FIELD_TOO_LARGE:
            response.setStatus(ReasonPhrases.REQUEST_HEADER_FIELDS_TOO_LARGE);
            response.setError('REQUEST HEADER FIELD TOO LARGE');
            return res.status(StatusCodes.REQUEST_HEADER_FIELDS_TOO_LARGE).send(response);
        // CONNECTION CLOSED WITHOUT  RESPONSE
        case errorKeys.CONNECTION_CLOSED_WITHOUT_RESPONSE:
            response.setStatus(ReasonPhrases.CONNECTION_CLOSED_WITHOUT_RESPONSE);
            response.setError('CONNECTION CLOSED WITH OUT RESPONSE');
            return res.status(StatusCodes.CONNECTION_CLOSED_WITHOUT_RESPONSE).send(response);
        // UNAVAILABE FOR LEGAL REASONS
        case errorKeys.UNAVAILABLE_FOR_LEGAL_REASONS:
            response.setStatus(ReasonPhrases.UNAVAILABLE_FOR_LEGAL_REASONS);
            response.setError('UNAVAILABE FOR LEGAL REASONS ');
            return res.status(StatusCodes.UNAVAILABLE_FOR_LEGAL_REASONS).send(response);
        // CLIENT CLOSED REQUEST
        case errorKeys.CLIENT_CLOSED_REQUEST:
            response.setStatus(ReasonPhrases.CLIENT_CLOSED_REQUEST);
            response.setError('CLIENT CLOSED REQUEST');
            return res.status(StatusCodes.CLIENT_CLOSED_REQUEST).send(response);
        // NOT IMPLEMENTED
        case errorKeys.NOT_IMPLEMENTED:
            response.setStatus(ReasonPhrases.NOT_IMPLEMENTED);
            response.setError('NOT IMPLEMENTED');
            return res.status(StatusCodes.NOT_IMPLEMENTED).send(response);
        // BAD GATEWAY
        case errorKeys.BAD_GATEWAY:
            response.setStatus(ReasonPhrases.BAD_GATEWAY);
            response.setError('BAD GATEWAY');
            return res.status(StatusCodes.BAD_GATEWAY).send(response);
        // SERVICE UNAVAILABLE
        case errorKeys.SERVICE_UNAVAILABLE:
            response.setStatus(ReasonPhrases.SERVICE_UNAVAILABLE);
            response.setError('SERVICE UNAVAILABLE');
            return res.status(StatusCodes.SERVICE_UNAVAILABLE).send(response);
        // GATEWAY TIMEOUT
        case errorKeys.GATEWAY_TIMEOUT:
            response.setStatus(ReasonPhrases.GATEWAY_TIMEOUT);
            response.setError('GATE WAY TIMEOUT');
            return res.status(StatusCodes.GATEWAY_TIMEOUT).send(response);
        // HTTP VERSION NOT SUPPORTED
        case errorKeys.HTTP_VERSION_NOT_SUPPORTED:
            response.setStatus(ReasonPhrases.HTTP_VERSION_NOT_SUPPORTED);
            response.setError('HTTP VERSION NOT SUPPORTED');
            return res.status(StatusCodes.HTTP_VERSION_NOT_SUPPORTED).send(response);
        // VARIANT ALSO NEGOTIATES
        case errorKeys.VARIANT_ALSO_NEGOTIATES:
            response.setStatus(ReasonPhrases.VARIANT_ALSO_NEGOTIATES);
            response.setError('VARIANT ALSO NEGOTIATES');
            return res.status(StatusCodes.VARIANT_ALSO_NEGOTIATES).send(response);
        // INSUFFICIENT STORAGE
        case errorKeys.INSUFFICIENT_STORAGE:
            response.setStatus(ReasonPhrases.INSUFFICIENT_SPACE_ON_RESOURCE);
            response.setError('IN SUFFICIENT STORAGE');
            return res.status(StatusCodes.INSUFFICIENT_STORAGE).send(response);
        // LOOP DETECTED
        case errorKeys.LOOP_DETECTED:
            response.setStatus(ReasonPhrases.LOOP_DETECTED);
            response.setError('LOOP DETECTED');
            return res.status(StatusCodes.LOOP_DETECTED).send(response);
        // NOT EXTENDED
        case errorKeys.NOT_EXTENDED:
            response.setStatus(ReasonPhrases.NOT_EXTENDED);
            response.setError('NOT EXTENDED');
            return res.status(StatusCodes.NOT_EXTENDED).send(response);
        // NETWORK AUTHENTICATION REQUIRED
        case errorKeys.NETWORK_AUTHENTICATION_REQUIRED:
            response.setStatus(ReasonPhrases.NETWORK_AUTHENTICATION_REQUIRED);
            response.setError('NETWORK AUTHENTICATION REQUIRED');
            return res.status(StatusCodes.NETWORK_AUTHENTICATION_REQUIRED).send(response);
        // NETWORK CONNECT TIMEOUT ERROR
        case errorKeys.NETWORK_CONNECT_TIMEOUT_ERROR:
            response.setStatus(ReasonPhrases.NETWORK_CONNECT_TIMEOUT_ERROR);
            response.setError('NETWORK CONNECT TIMEOUT ERROR');
            return res.status(StatusCodes.NETWORK_CONNECT_TIMEOUT_ERROR).send(response);

        default:
            response.setStatus(ReasonPhrases.INTERNAL_SERVER_ERROR);
            response.setError('Internal server Error');
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(response);
    }
};
