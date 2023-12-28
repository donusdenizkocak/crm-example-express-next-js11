import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm"
import { User } from "./User"

enum type {
    ADDRESS = 'address', CALENDER = 'calender',
    EMAIL = 'email', PHONE = 'phone', TASK = 'task',
    USER = 'user', USER_INFO = 'user_info'
};

@Entity("logs")
export class Log {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "enum", enum: type, default: type.TASK, nullable: false })
    type: type

    @Column({ type: 'varchar', length: 200, nullable: false })
    process: string

<<<<<<< HEAD
    @ManyToOne(() => User, (user) => user.id, {onDelete: 'CASCADE',nullable: false})
=======
    @ManyToOne(() => User, (user) => user.id, {onDelete: 'CASCADE', nullable: false})
>>>>>>> 69fb30badf4f423ffe0ec2ed22817a40a5fd7bbe
    @JoinColumn({ name: "userId" })
    user: User

    @CreateDateColumn()
    createdAt: Date;
}
