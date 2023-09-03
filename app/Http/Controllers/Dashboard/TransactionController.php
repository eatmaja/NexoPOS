<?php

/**
 * NexoPOS Controller
 *
 * @since  1.0
 **/

namespace App\Http\Controllers\Dashboard;

use App\Crud\TransactionsHistoryCrud;
use App\Http\Controllers\DashboardController;
use App\Models\Transaction;
use App\Services\Options;
use App\Services\TransactionService;
use Illuminate\Http\Request;

class TransactionController extends DashboardController
{
    public function __construct( public TransactionService $transactionService, public Options $optionsService )
    {
        parent::__construct();
    }

    public function get( $id = null )
    {
        return $this->transactionService->get( $id );
    }

    public function getTransactionHistory( Transaction $transaction )
    {
        return TransactionsHistoryCrud::table([
            'title' => sprintf( __( '"%s" Record History' ), $transaction->name ),
            'description' => __( 'Shows all histories generated by the transaction.' ),
            'queryParams' => [
                'transaction_id' => $transaction->id,
            ],
        ]);
    }

    public function listTransactions()
    {
        return $this->view( 'pages.dashboard.crud.table', [
            'src' => ns()->url( '/api/crud/ns.transactions' ),
            'title' => __( 'Transactions' ),
            'description' => __( 'List all created transactions' ),
            'createUrl' => ns()->url( '/dashboard/accounting/transactions/create' ),
        ]);
    }

    public function createTransaction()
    {
        if ( ! ns()->canPerformAsynchronousOperations() ) {
            session()->flash( 'infoMessage', __( 'Unable to use Scheduled, Recurring and Entity Transactions as tasks aren\'t configured correctly.' ) );
        }

        return $this->view( 'pages.dashboard.transactions.create', [
            'title' => __( 'Create New Transaction' ),
            'description' => __( 'Set direct, scheduled transactions.' ),
        ]);
    }

    public function editTransaction( Transaction $transaction )
    {
        if ( ! ns()->canPerformAsynchronousOperations() ) {
            session()->flash( 'infoMessage', __( 'Unable to use Scheduled, Recurring and Entity Transactions as tasks aren\'t configured correctly.' ) );
        }

        return $this->view( 'pages.dashboard.transactions.update', [
            'title' => __( 'Update Transaction' ),
            'transaction' => $transaction,
            'description' => __( 'Set direct, scheduled transactions.' ),
        ]);
    }

    public function getConfigurations( Transaction $transaction )
    {
        return $this->transactionService->getConfigurations( $transaction );
    }

    /**
     * Implement a transaction registration
     *
     * @param Request
     * @return json
     */
    public function post( Request $request ) // <= need to add a validation
    {
        $fields = $request->only([
            'name',
            'active',
            'category_id',
            'description',
            'media_id',
            'value',
            'recurring',
            'type',
            'group_id',
            'occurrence',
            'occurrence_value',
            'scheduled_date',
        ]);

        return $this->transactionService->create( $fields );
    }

    public function putTransactionAccount( Request $request, $id )
    {
        $fields = $request->only([
            'name',
            'operation',
            'description',
            'account',
        ]);

        return $this->transactionService->editTransactionAccount( $id, $fields );
    }

    /**
     * Implement saving an expense
     * should check the recursive hierarchy
     *
     * @param Request
     * @param int expense id
     * @return json
     */
    public function put( Request $request, $id )
    {
        $fields = $request->only([
            'name',
            'active',
            'category_id',
            'description',
            'media_id',
            'value',
            'recurring',
            'type',
            'group_id',
            'occurrence',
            'occurrence_value',
            'scheduled_date',
        ]);

        return $this->transactionService->edit( $id, $fields );
    }

    public function delete( $id )
    {
        return $this->transactionService->delete( $id );
    }

    /**
     * get an expense category
     *
     * @param int|null category id
     * @return json
     */
    public function getExpensesCategories( $id = null )
    {
        return $this->transactionService->getTransactionAccountByID( $id );
    }

    /**
     * delete a specific category
     *
     * @param int category id
     * @return json
     */
    public function deleteCategory( $id )
    {
        return $this->transactionService->deleteCategory( $id );
    }

    /**
     * Create an expense category
     *
     * @param Request
     * @return json
     */
    public function postTransactionsAccount( Request $request )
    {
        $fields = $request->only([
            'name',
            'operation',
            'description',
            'account',
        ]);

        return $this->transactionService->createAccount( $fields );
    }
    /**
     * Get expenses entries under a specific
     * expense category
     *
     * @param int Expense Category ID
     * @return array
     */
    public function getTransactionAccountsHistory( $id )
    {
        return $this->transactionService->getTransactionAccountByID( $id )->transactions;
    }

    public function transactionsHistory()
    {
        return TransactionsHistoryCrud::table();
    }
}
