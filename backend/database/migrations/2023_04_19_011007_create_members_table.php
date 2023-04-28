<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMembersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('members', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('member_type')->comment('メンバーの種別');
            $table->string('name', 255)->comment('名前');
            $table->string('name_kana', 255)->nullable()->comment('名前(フリカナ)');
            $table->string('email', 255)->unique()->comment('メールアドレス');
            $table->string('password', 255)->comment('パスワード');
            $table->integer('membership_status')->comment('メンバーシップのステータス');
            $table->integer('phone_first')->nullable()->comment('電話番号(1桁目)');
            $table->integer('phone_second')->nullable()->comment('電話番号(2桁目)');
            $table->integer('phone_third')->nullable()->comment('電話番号(3桁目)');
            $table->date('birth_date')->nullable()->comment('生年月日');
            $table->integer('gender')->nullable()->comment('性別');
            $table->timestamp('requested_at')->nullable()->comment('会員登録申請日時');
            $table->timestamp('registered_at')->nullable()->comment('会員登録日時');
            $table->boolean('is_denied')->nullable()->default(false)->comment('非認証フラグ');
            $table->string('postcode', 7)->nullable()->comment('郵便番号');
            $table->integer('prefectures')->nullable()->comment('都道府県');
            $table->string('address', 255)->nullable()->comment('住所');
            $table->string('sub_address', 255)->nullable()->comment('マンション名など');
            $table->text('member_remarks')->nullable()->comment('会員用備考');
            $table->text('admin_remarks')->nullable()->comment('管理者用備考');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('members');
    }
}
