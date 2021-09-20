import { ParagraphProps } from './Paragraph.props';
import cn from 'classnames';
import styles from './Paragraph.module.css';

export const Paragraph = ({ children, size = 'm', className, ...props }: ParagraphProps): JSX.Element => {
    return (
        <p className={cn(styles.p, className, {
            [styles.s]: size == 's',
            [styles.m]: size == 'm',
            [styles.l]: size == 'l',

        })}{...props}> {children}</p>
    );
};
