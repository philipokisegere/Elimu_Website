"""new

Revision ID: abe3e235305f
Revises: 96688a038a78
Create Date: 2024-05-20 23:02:16.095338

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'abe3e235305f'
down_revision = '96688a038a78'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('program_type', schema=None) as batch_op:
        batch_op.add_column(sa.Column('programName', sa.String(), nullable=True))
        batch_op.drop_column('progName')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('program_type', schema=None) as batch_op:
        batch_op.add_column(sa.Column('progName', sa.VARCHAR(), nullable=True))
        batch_op.drop_column('programName')

    # ### end Alembic commands ###