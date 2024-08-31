<template>
    <div class="container-fluid" id="admin">
        <div class="container tab-div">
            <!-- Products Section -->
            <h2>Products</h2>
            <button class="add" type="button" data-bs-toggle="modal" data-bs-target="#addProductModal">
                <i class="fa-solid fa-square-plus"></i>
            </button>
            <table class="table">
                <thead>
                    <tr id="prod-row">
                        <th scope="col">ProdImg</th>
                        <th scope="col">ProdID</th>
                        <th scope="col">ProdName</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Category</th>
                        <th scope="col">Edit/Delete</th>
                    </tr>
                </thead>
                <tbody v-if="products">
                    <tr v-for="product in products" :key="product.prodID" id="prod-row">
                        <td><img :src="product.prodUrl" alt="product-img" id="tab-img"></td>
                        <td>{{ product.prodID }}</td>
                        <td>{{ product.prodName }}</td>
                        <td>{{ product.quantity }}</td>
                        <td>{{ product.amount }}</td>
                        <td>{{ product.category }}</td>
                        <td class="btns">
                            <button @click="editProductBtn(product.prodID)" class="btn-edit" data-bs-toggle="modal" data-bs-target="#editProductModal">
                                <i class="bi bi-pencil"></i>
                            </button>
                            <button @click="confirmProductDelete(product.prodID)" class="btn-del">
                                <i class="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <Spinner />
                </tbody>
            </table>
        </div>

        <!-- Users Section -->
        <div class="container tab-div">
            <h2>Users</h2>
            <h3>add user <button class="add" type="button" data-bs-toggle="modal" data-bs-target="#addUserModal">
                <i class="bi bi-plus-square"></i>
            </button></h3>
            
            <table class="table">
                <thead>
                    <tr id="user-row">
                        <th scope="col">UserID</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Edit/Delete</th>
                    </tr>
                </thead>
                <tbody v-if="users">
                    <tr v-for="user in users" :key="user.userID" id="user-row">
                        <td>{{ user.userID }}</td>
                        <td>{{ user.firstName }}</td>
                        <td>{{ user.emailAdd }}</td>
                        <td>{{ user.userRole }}</td>
                        <td class="btns">
                            <button @click="editUserBtn(user.userID)" class="btn-edit" data-bs-toggle="modal" data-bs-target="#editUserModal">
                                <i class="bi bi-pencil"></i>
                            </button>
                            <button @click="confirmUserDelete(user.userID)" class="btn-del">
                                <i class="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <Spinner />
                </tbody>
            </table>
        </div>

        <!-- Add Product Modal -->
        <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="addProductModalTitle" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addProductModalTitle">Add a Product</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input v-model="newProduct.prodName" type="text" placeholder="Name"><br>
                        <input v-model="newProduct.quantity" type="text" placeholder="Quantity"><br>
                        <input v-model="newProduct.amount" type="text" placeholder="Amount"><br>
                        <input v-model="newProduct.category" type="text" placeholder="Category"><br>
                        <input v-model="newProduct.prodUrl" type="text" placeholder="Img Url"><br>
                        <input v-model="newProduct.prodBio" type="text" placeholder="Bio img url"><br>
                        <input v-model="newProduct.prodDes" type="text" placeholder="Description"><br>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="addProduct">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Edit Product Modal -->
        <div class="modal fade" id="editProductModal" tabindex="-1" aria-labelledby="editProductModalTitle" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="editProductModalTitle">Edit Product</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input v-model="productPayload.prodName" type="text" placeholder="Product name"><br>
                        <input v-model="productPayload.quantity" type="text" placeholder="Quantity"><br>
                        <input v-model="productPayload.amount" type="text" placeholder="Amount"><br>
                        <input v-model="productPayload.category" type="text" placeholder="Category"><br>
                        <input v-model="productPayload.prodUrl" type="text" placeholder="Image Url"><br>
                        <input v-model="productPayload.prodBio" type="text" placeholder="Bio"><br>
                        <input v-model="productPayload.prodDes" type="text" placeholder="Description"><br>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="editProduct">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add User Modal -->
        <div class="modal fade" id="addUserModal" tabindex="-1" aria-labelledby="addUserModalTitle" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addUserModalTitle">Add a User</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input v-model="newUser.userName" type="text" placeholder="Username"><br>
                        <input v-model="newUser.emailAdd" type="email" placeholder="Email"><br>
                        <input v-model="newUser.userRole" type="text" placeholder="Role"><br>
                        <input v-model="newUser.userPass" type="text" placeholder="Password"><br>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="addUser">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Edit User Modal -->
        <div class="modal fade" id="editUserModal" tabindex="-1" aria-labelledby="editUserModalTitle" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="editUserModalTitle">Edit User</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input v-model="userPayload.userName" type="text" placeholder="Username"><br>
                        <input v-model="userPayload.email" type="email" placeholder="Email"><br>
                        <input v-model="userPayload.role" type="text" placeholder="Role"><br>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="editUser">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Spinner from '@/components/SpinnerComp.vue';

export default {
    components: {
        Spinner
    },
    data() {
        return {
            // Product-related data
            productPayload: {
                prodID: null,
                prodName: "",
                quantity: "",
                amount: "",
                category: "",
                prodUrl: "",
                prodBio: "",
                prodDes: "",
            },
            newProduct: {
                prodName: "",
                quantity: "",
                amount: "",
                category: "",
                prodUrl: "",
                prodBio: "",
                prodDes: "",
            },
            // User-related data
            userPayload: {
                userID: null,
                userName: "",
                email: "",
                role: "",
            },
            newUser: {
                userName: "",
                email: "",
                role: "",
            },
            productToDelete: null,
            userToDelete: null
        };
    },
    methods: {
        // Product methods
        addProduct() {
            const data = {
                prodName: this.newProduct.prodName,
                quantity: this.newProduct.quantity,
                amount: this.newProduct.amount,
                category: this.newProduct.category,
                prodUrl: this.newProduct.prodUrl,
                prodBio: this.newProduct.prodBio,
                prodDes: this.newProduct.prodDes
            };
            this.$store.dispatch('addProduct', data);
        },
        editProduct() {
            this.$store.dispatch('updateProduct', this.productPayload);
        },
        editProductBtn(id) {
            const item = this.products.find(item => item.prodID == id);
            if (item) {
                this.productPayload = { ...item };
            }
        },
        confirmProductDelete(id) {
            const confirmation = confirm("Are you sure you want to delete this product?");
            if (confirmation) {
                this.deleteProduct(id);
            }
        },
        deleteProduct(id) {
            this.$store.dispatch('deleteProduct', id);
        },

        // User methods
        addUser() {
            const data = {
                firstName: this.newUser.firstName,
                emailAdd: this.newUser.emailAdd,
                userPass: this.newUser.userPass,
                userRole: this.newUser.userRole
            };
            this.$store.dispatch('addUser', data);
        },
        editUser() {
            this.$store.dispatch('updateUser', this.userPayload);
        },
        editUserBtn(id) {
            const item = this.users.find(item => item.userID == id);
            if (item) {
                this.userPayload = { ...item };
            }
        },
        confirmUserDelete(id) {
            const confirmation = confirm("Are you sure you want to delete this user?");
            if (confirmation) {
                this.deleteUser(id);
            }
        },
        deleteUser(id) {
            this.$store.dispatch('deleteUser', id);
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
        users() {
            return this.$store.state.users;
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts');
        this.$store.dispatch('fetchUsers');
    }
}
</script>

<style>

</style>