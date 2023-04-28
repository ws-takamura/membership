<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Member;
use Faker\Generator as Faker;

$factory->define(Member::class, function (Faker $faker) {
    return [
        'member_type' => $faker->numberBetween(1, 2),
        'name' => $faker->name(),
        'name_kana' => $faker->kanaName(),
        'email' => $faker->unique()->safeEmail(),
        'password' => bcrypt('password'),
        'membership_status' => $faker->numberBetween(1, 2),
        'phone_first' => $faker->numberBetween(1, 999),
        'phone_second' => $faker->numberBetween(1, 9999),
        'phone_third' => $faker->numberBetween(1, 9999),
        'birth_date' => $faker->dateTimeBetween('-70 years', '-10 years'),
        'gender' => $faker->numberBetween(1, 3),
        'requested_at' => $faker->dateTimeBetween('-2 months', 'now'),
        'registered_at' => $faker->dateTimeBetween('-2 months', 'now'),
        'is_denied' => $faker->boolean(),
        'postcode' => $faker->postcode(),
        'prefectures' => $faker->numberBetween(1, 47),
        'address' => $faker->city() . $faker->streetAddress(),
        'sub_address' => $faker->secondaryAddress(),
        'member_remarks' => $faker->realText(),
        'admin_remarks' => $faker->realText(),
    ];
});
