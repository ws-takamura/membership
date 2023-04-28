<?php

use Illuminate\Database\Seeder;
use App\Models\Member;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        factory(Member::class, 100)->create();
    }
}
