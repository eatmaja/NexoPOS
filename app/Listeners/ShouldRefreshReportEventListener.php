<?php

namespace App\Listeners;

use App\Events\ShouldRefreshReportEvent;
use App\Jobs\RefreshReportJob;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class ShouldRefreshReportEventListener
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle( ShouldRefreshReportEvent $event): void
    {
        RefreshReportJob::dispatch( $event->date );
    }
}