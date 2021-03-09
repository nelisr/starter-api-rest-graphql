import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import ControlProfile from './ControlProfile'
import AuthLog from './AuthLog'

@Entity({ name: 'tb_users', schema: 'manager' })
export default class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    name: string

    @Column({ unique: true, nullable: false })
    email: string

    @Column({ unique: true, nullable: false })
    username: string

    @Column({ nullable: false })
    password: string

    @OneToMany(() => ControlProfile, pf => pf.user)
    public controlProfile: ControlProfile[]

    @OneToMany(() => AuthLog, pf => pf.user)
    public authLog: AuthLog[]

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date

    @UpdateDateColumn({ name: 'updated_at' })
    public updatedAt: Date
}
