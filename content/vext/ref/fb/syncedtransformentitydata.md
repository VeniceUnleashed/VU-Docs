---
title: SyncedTransformEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[SyncedTransformEntityData](#constructor-0)**() |
| **[SyncedTransformEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SyncedTransformEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[SyncedTransformEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SyncedTransformEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SyncedTransformEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| {{< prop "interpolate" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SyncedTransformEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SyncedTransformEntityData {#constructor-0}

> **SyncedTransformEntityData**()

Creates a new [SyncedTransformEntityData](/vext/ref/fb/syncedtransformentitydata) frostbite instance.

### SyncedTransformEntityData {#constructor-1}

> **SyncedTransformEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SyncedTransformEntityData](/vext/ref/fb/syncedtransformentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SyncedTransformEntityData {#constructor-2}

> **SyncedTransformEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [SyncedTransformEntityData](/vext/ref/fb/syncedtransformentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [SyncedTransformEntityData](/vext/ref/fb/syncedtransformentitydata). |

### SyncedTransformEntityData {#constructor-3}

> **SyncedTransformEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SyncedTransformEntityData](/vext/ref/fb/syncedtransformentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SyncedTransformEntityData](/vext/ref/fb/syncedtransformentitydata). |

### SyncedTransformEntityData {#constructor-4}

> **SyncedTransformEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SyncedTransformEntityData](/vext/ref/fb/syncedtransformentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SyncedTransformEntityData](/vext/ref/fb/syncedtransformentitydata). |

### SyncedTransformEntityData {#constructor-5}

> **SyncedTransformEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SyncedTransformEntityData](/vext/ref/fb/syncedtransformentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SyncedTransformEntityData](/vext/ref/fb/syncedtransformentitydata). |

## Properties

### {{% prop-heading "inValue" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**

### {{% prop-heading "interpolate" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SyncedTransformEntityData](/vext/ref/fb/syncedtransformentitydata) type.

