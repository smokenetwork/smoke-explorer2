import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class OperationsModal extends Component {
  render() {
    return (
      <div className="modal fade" id="opsModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
           aria-hidden="true">
        <div className="modal-dialog priv-dialog">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </button>
              <h2 className="title title-up">TX 1324225</h2>
            </div>
            <div className="modal-body">
              {/*// <!-- If json does not return one of the values it should not display it in the table -->*/}
              <table className="table">
                <tbody>
                <tr>
                  <td><span className="text-muted">Type</span></td>
                  <td><b>
                    vote,
                    comment,

                    transfer,
                    transfer_to_vesting,
                    withdraw_vesting,

                    account_create,
                    account_update,

                    witness_update,
                    account_witness_vote,
                    account_witness_proxy,

                    custom,

                    delete_comment,
                    custom_json,
                    comment_options,
                    set_withdraw_vesting_route,
                    challenge_authority,
                    prove_authority,
                    request_account_recovery,
                    recover_account,
                    change_recovery_account,
                    escrow_transfer,
                    escrow_dispute,
                    escrow_release,
                    escrow_approve,
                    custom_binary,
                    decline_voting_rights,
                    claim_reward_balance,
                    account_create_with_delegation
                  </b></td>
                </tr>
                <tr>
                  <td><span className="text-muted">Amount</span></td>
                  <td>asset amount</td>
                </tr>
                <tr>
                  <td><span className="text-muted">From</span></td>
                  <td>account_name_type from</td>
                </tr>
                <tr>
                  <td><span className="text-muted">To</span></td>
                  <td>account_name_type to</td>
                </tr>
                <tr>
                  <td><span className="text-muted">Memo</span></td>
                  <td>string memo</td>
                </tr>
                <tr>
                  <td><span className="text-muted">New Account</span></td>
                  <td>new_account_name</td>
                </tr>
                <tr>
                  <td><span className="text-muted">Fee</span></td>
                  <td>fee</td>
                </tr>
                <tr>
                  <td><span className="text-muted">Account</span></td>
                  <td>account</td>
                </tr>
                <tr>
                  <td><span className="text-muted">Author</span></td>
                  <td>author</td>
                </tr>
                <tr>
                  <td><span className="text-muted">Title</span></td>
                  <td>title</td>
                </tr>
                <tr>
                  <td><span className="text-muted">Link</span></td>
                  <td><a href="https://smoke.io/{permlink}" target="_blank">https://smoke.io/{permlink}</a></td>
                </tr>
                <tr>
                  <td><span className="text-muted">Body</span></td>
                  <td>body</td>
                </tr>
                <tr>
                  <td><span className="text-muted">Voter</span></td>
                  <td>voter</td>
                </tr>
                <tr>
                  <td><span className="text-muted">Weight</span></td>
                  <td>weight</td>
                </tr>
                <tr>
                  <td><span className="text-muted">Escrow</span></td>
                  <td>account_name_type agent</td>
                </tr>
                <tr>
                  <td><span className="text-muted">Escrow Amount</span></td>
                  <td>steem_amount</td>
                </tr>
                <tr>
                  <td><span className="text-muted">Ratification Deadline</span></td>
                  <td>ratification_deadline</td>
                </tr>
                <tr>
                  <td><span className="text-muted">Expiration</span></td>
                  <td>escrow_expiration</td>
                </tr>
                <tr>
                  <td><span className="text-muted">Escrow Completed</span></td>
                  <td>account_name_type who</td>
                </tr>
                <tr>
                  <td><span className="text-muted">Escrow Receiver</span></td>
                  <td>account_name_type receiver</td>
                </tr>
                <tr>
                  <td><span className="text-muted">Amount</span></td>
                  <td>vesting_shares</td>
                </tr>
                <tr>
                  <td><span className="text-muted">URL</span></td>
                  <td>url</td>
                </tr>
                <tr>
                  <td><span className="text-muted">Block Signing Key</span></td>
                  <td>block_signing_key</td>
                </tr>
                <tr>
                  <td><span className="text-muted">Fee</span></td>
                  <td>fee</td>
                </tr>
                <tr>
                  <td><span className="text-muted">Witness</span></td>
                  <td>witness</td>
                </tr>
                <tr>
                  <td><span className="text-muted">Proxy</span></td>
                  <td>proxy</td>
                </tr>
                <tr>
                  <td><span className="text-muted">Data</span></td>
                  <td>data</td>
                </tr>
                <tr>
                  <td><span className="text-muted">ID</span></td>
                  <td>id</td>
                </tr>
                <tr>
                  <td><span className="text-muted">SMOKE Reward</span></td>
                  <td>reward_steem</td>
                </tr>
                <tr>
                  <td><span className="text-muted">SMOKE Power Reward</span></td>
                  <td>reward_vests</td>
                </tr>
                <tr>
                  <td><span className="text-muted">Meta</span></td>
                  <td>json_metadata</td>
                </tr>
                <tr>
                  <td><span className="text-muted">Date</span></td>
                  <td>timestamp</td>
                </tr>
                <tr>
                  <td><span className="text-muted">Hash</span></td>
                  <td>transaction_merkle_root</td>
                </tr>
                <tr>
                  <td><span className="text-muted">Block</span></td>
                  <td>ref_block_num</td>
                </tr>
                </tbody>
              </table>


            </div>
            <div className="modal-footer">
              {/*// <!-- <button type="button" className="btn btn-default">Nice Button</button>*/}
              {/*// <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button> -->*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OperationsModal;
