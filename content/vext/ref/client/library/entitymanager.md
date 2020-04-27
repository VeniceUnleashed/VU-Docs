---
title: EntityManager
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[GetIterator](#getiterator)**(entityType: string) | [EntityIterator](/vext/ref/shared/type/entityiterator) |
| **[CreateEntity](#createentity)**(entityData: [DataContainer](/vext/ref/shared/type/datacontainer), transform: [LinearTransform](/vext/ref/shared/type/lineartransform)) | [Entity](/vext/ref/shared/type/entity) \| nil |
| **[CreateEntity](#createentity-1)**(entityData: [DataContainer](/vext/ref/shared/type/datacontainer), params: [EntityCreationParams](/vext/ref/shared/type/entitycreationparams)) | [Entity](/vext/ref/shared/type/entity) \| nil |
| **[CreateEntitiesFromBlueprint](#createentitiesfromblueprint)**(blueprint: [DataContainer](/vext/ref/shared/type/datacontainer), transform: [LinearTransform](/vext/ref/shared/type/lineartransform)) | [EntityBus](/vext/ref/shared/type/entitybus) \| nil |
| **[CreateEntitiesFromBlueprint](#createentitiesfromblueprint-1)**(blueprint: [DataContainer](/vext/ref/shared/type/datacontainer), params: [EntityCreationParams](/vext/ref/shared/type/entitycreationparams)) | [EntityBus](/vext/ref/shared/type/entitybus) \| nil |
| **[TraverseAllEntities](#traverseallentities)**(callback: callable) | void |
| **[TraverseAllEntities](#traverseallentities-1)**(context: any, callback: callable) | void |

## Methods

### GetIterator {#getiterator}

> **GetIterator**(entityType: string): [EntityIterator](/vext/ref/shared/type/entityiterator)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **entityType** | string |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[EntityIterator](/vext/ref/shared/type/entityiterator)** |  |

### CreateEntity {#createentity}

> **CreateEntity**(entityData: [DataContainer](/vext/ref/shared/type/datacontainer), transform: [LinearTransform](/vext/ref/shared/type/lineartransform)): [Entity](/vext/ref/shared/type/entity) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **entityData** | [DataContainer](/vext/ref/shared/type/datacontainer) |  |
| **transform** | [LinearTransform](/vext/ref/shared/type/lineartransform) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Entity](/vext/ref/shared/type/entity)** \| **nil** |  |

### CreateEntity {#createentity-1}

> **CreateEntity**(entityData: [DataContainer](/vext/ref/shared/type/datacontainer), params: [EntityCreationParams](/vext/ref/shared/type/entitycreationparams)): [Entity](/vext/ref/shared/type/entity) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **entityData** | [DataContainer](/vext/ref/shared/type/datacontainer) |  |
| **params** | [EntityCreationParams](/vext/ref/shared/type/entitycreationparams) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Entity](/vext/ref/shared/type/entity)** \| **nil** |  |

### CreateEntitiesFromBlueprint {#createentitiesfromblueprint}

> **CreateEntitiesFromBlueprint**(blueprint: [DataContainer](/vext/ref/shared/type/datacontainer), transform: [LinearTransform](/vext/ref/shared/type/lineartransform)): [EntityBus](/vext/ref/shared/type/entitybus) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **blueprint** | [DataContainer](/vext/ref/shared/type/datacontainer) |  |
| **transform** | [LinearTransform](/vext/ref/shared/type/lineartransform) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[EntityBus](/vext/ref/shared/type/entitybus)** \| **nil** |  |

### CreateEntitiesFromBlueprint {#createentitiesfromblueprint-1}

> **CreateEntitiesFromBlueprint**(blueprint: [DataContainer](/vext/ref/shared/type/datacontainer), params: [EntityCreationParams](/vext/ref/shared/type/entitycreationparams)): [EntityBus](/vext/ref/shared/type/entitybus) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **blueprint** | [DataContainer](/vext/ref/shared/type/datacontainer) |  |
| **params** | [EntityCreationParams](/vext/ref/shared/type/entitycreationparams) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[EntityBus](/vext/ref/shared/type/entitybus)** \| **nil** |  |

### TraverseAllEntities {#traverseallentities}

> **TraverseAllEntities**(callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **callback** | callable |  |

### TraverseAllEntities {#traverseallentities-1}

> **TraverseAllEntities**(context: any, callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **context** | any |  |
| **callback** | callable |  |

