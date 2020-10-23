import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table)=>{
        table.increments('id').primary().notNullable()
        table.string('username').notNullable()
        table.string('state').notNullable()
        table.string('city').notNullable()
        table.string('category').notNullable()
        table.string('whatsapp').notNullable()
        table.string('etinic').notNullable()
        table.text('bio', 'mediumtext' ).notNullable()
        table.string('hability').notNullable()
        table.string('hability_level').notNullable()
        table.string('institution')
        table.string('formation')
        table.string('area')
        table.date('formation_initi')
        table.date('formation_end')
        table.string('company')
        table.string('occupation')
        table.string('contract')
        table.date('occupation_init')
        table.date('occupation_end')

    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}
