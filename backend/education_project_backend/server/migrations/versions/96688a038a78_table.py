"""table

Revision ID: 96688a038a78
Revises: bccd5a510046
Create Date: 2024-05-20 19:27:59.054565

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '96688a038a78'
down_revision = 'bccd5a510046'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('departments', schema=None) as batch_op:
        batch_op.add_column(sa.Column('departmentName', sa.String(), nullable=False))
        batch_op.drop_column('name')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('departments', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.VARCHAR(), nullable=False))
        batch_op.drop_column('departmentName')

    # ### end Alembic commands ###
