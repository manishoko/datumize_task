import { userConstants } from '../_constants';
import { userService } from '../_services';
import { history } from '../_helpers';
import { alertActions } from './alert.actions.js';

export const userActions = {
    getAllRoles

};


function getAllRoles() {
    return dispatch => {
        dispatch(request());

        userService.getAllRoles()
            .then(
                roles => dispatch(success(roles) ),
              //  error => dispatch(failure(error.toString()))
            );


    };

    function request(roles) { return { type: userConstants.ROLES_REQUEST, roles } }
    function success(roles) { return { type: userConstants.ROLES_SUCCESS, roles } }
  //function failure(roles) { return { type: userConstants.ROLES_FAILURE, error } }
}
