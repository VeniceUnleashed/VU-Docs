---
title: DynamicAvoidanceEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[DynamicAvoidanceEntityData](#constructor-0)**() |
| **[DynamicAvoidanceEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DynamicAvoidanceEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[DynamicAvoidanceEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[DynamicAvoidanceEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[DynamicAvoidanceEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "repelOthers" >}} | [DynamicAvoidanceMode](/vext/ref/fb/dynamicavoidancemode) |
| {{< prop "reportPredictedCollision" >}} | [DynamicAvoidanceMode](/vext/ref/fb/dynamicavoidancemode) |
| {{< prop "collisionRadius" >}} | float |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "antBinding" >}} | [AntDynamicAvoidanceBinding](/vext/ref/fb/antdynamicavoidancebinding) |
| {{< prop "affectedByRepellingForce" >}} | bool |
| {{< prop "predictedByOthers" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DynamicAvoidanceEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DynamicAvoidanceEntityData {#constructor-0}

> **DynamicAvoidanceEntityData**()

Creates a new [DynamicAvoidanceEntityData](/vext/ref/fb/dynamicavoidanceentitydata) frostbite instance.

### DynamicAvoidanceEntityData {#constructor-1}

> **DynamicAvoidanceEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DynamicAvoidanceEntityData](/vext/ref/fb/dynamicavoidanceentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DynamicAvoidanceEntityData {#constructor-2}

> **DynamicAvoidanceEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [DynamicAvoidanceEntityData](/vext/ref/fb/dynamicavoidanceentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [DynamicAvoidanceEntityData](/vext/ref/fb/dynamicavoidanceentitydata). |

### DynamicAvoidanceEntityData {#constructor-3}

> **DynamicAvoidanceEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [DynamicAvoidanceEntityData](/vext/ref/fb/dynamicavoidanceentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [DynamicAvoidanceEntityData](/vext/ref/fb/dynamicavoidanceentitydata). |

### DynamicAvoidanceEntityData {#constructor-4}

> **DynamicAvoidanceEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [DynamicAvoidanceEntityData](/vext/ref/fb/dynamicavoidanceentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [DynamicAvoidanceEntityData](/vext/ref/fb/dynamicavoidanceentitydata). |

### DynamicAvoidanceEntityData {#constructor-5}

> **DynamicAvoidanceEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DynamicAvoidanceEntityData](/vext/ref/fb/dynamicavoidanceentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DynamicAvoidanceEntityData](/vext/ref/fb/dynamicavoidanceentitydata). |

## Properties

### {{% prop-heading "repelOthers" %}}

> **[DynamicAvoidanceMode](/vext/ref/fb/dynamicavoidancemode)**

### {{% prop-heading "reportPredictedCollision" %}}

> **[DynamicAvoidanceMode](/vext/ref/fb/dynamicavoidancemode)**

### {{% prop-heading "collisionRadius" %}}

> **float**

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "antBinding" %}}

> **[AntDynamicAvoidanceBinding](/vext/ref/fb/antdynamicavoidancebinding)**

### {{% prop-heading "affectedByRepellingForce" %}}

> **bool**

### {{% prop-heading "predictedByOthers" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DynamicAvoidanceEntityData](/vext/ref/fb/dynamicavoidanceentitydata) type.

