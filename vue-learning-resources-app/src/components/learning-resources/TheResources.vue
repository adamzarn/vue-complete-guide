<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storedResourcesButtonMode">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResourceButtonMode">Add Resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
    components: {
        'stored-resources': StoredResources,
        'add-resource': AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The official Vue.js documentation.',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Learn how to google',
                    link: 'https://google.com'
                },
            ],
        };
    },
    computed: {
        storedResourcesButtonMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        },
        addResourceButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat';
        }
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            removeResource: this.removeResource,
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResource(title, description, link) {
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: link
            };
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },
        removeResource(id) {
            const resourceIndex = this.storedResources.findIndex(resource => resource.id === id);
            this.storedResources.splice(resourceIndex, 1);
        }
    }
}
</script>

<style scoped>

</style>