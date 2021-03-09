import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import ProfileFunctionality from './ProfileFunctionality'

@Entity({ name: 'tb_functionalities', schema: 'manager' })
export default class Functionality {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ unique: true, nullable: false })
    public name: string;

    @Column({ unique: true, nullable: false })
    public key: string;

    @OneToMany(() => ProfileFunctionality, pf => pf.functionality)
    public profileFunctionality: ProfileFunctionality[]

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    public updatedAt: Date;
}
