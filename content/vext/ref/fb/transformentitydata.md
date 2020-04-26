---
title: TransformEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[TransformEntityData](#constructor-0)**() |
| **[TransformEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[TransformEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[TransformEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[TransformEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[TransformEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "defaultTransform" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "TransformEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### TransformEntityData {#constructor-0}

> **TransformEntityData**()

Creates a new [TransformEntityData](/vext/ref/fb/transformentitydata) frostbite instance.

### TransformEntityData {#constructor-1}

> **TransformEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [TransformEntityData](/vext/ref/fb/transformentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### TransformEntityData {#constructor-2}

> **TransformEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [TransformEntityData](/vext/ref/fb/transformentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [TransformEntityData](/vext/ref/fb/transformentitydata). |

### TransformEntityData {#constructor-3}

> **TransformEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [TransformEntityData](/vext/ref/fb/transformentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [TransformEntityData](/vext/ref/fb/transformentitydata). |

### TransformEntityData {#constructor-4}

> **TransformEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [TransformEntityData](/vext/ref/fb/transformentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [TransformEntityData](/vext/ref/fb/transformentitydata). |

### TransformEntityData {#constructor-5}

> **TransformEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [TransformEntityData](/vext/ref/fb/transformentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [TransformEntityData](/vext/ref/fb/transformentitydata). |

## Properties

### {{% prop-heading "defaultTransform" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [TransformEntityData](/vext/ref/fb/transformentitydata) type.

