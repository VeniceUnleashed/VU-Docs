---
title: TransformBlendEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[TransformBlendEntityData](#constructor-0)**() |
| **[TransformBlendEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[TransformBlendEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[TransformBlendEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[TransformBlendEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[TransformBlendEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "in2" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| {{< prop "in1" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| {{< prop "blendValue" >}} | float |
| {{< prop "blendValue2" >}} | float |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "TransformBlendEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### TransformBlendEntityData {#constructor-0}

> **TransformBlendEntityData**()

Creates a new [TransformBlendEntityData](/vext/ref/fb/transformblendentitydata) frostbite instance.

### TransformBlendEntityData {#constructor-1}

> **TransformBlendEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [TransformBlendEntityData](/vext/ref/fb/transformblendentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### TransformBlendEntityData {#constructor-2}

> **TransformBlendEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [TransformBlendEntityData](/vext/ref/fb/transformblendentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [TransformBlendEntityData](/vext/ref/fb/transformblendentitydata). |

### TransformBlendEntityData {#constructor-3}

> **TransformBlendEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [TransformBlendEntityData](/vext/ref/fb/transformblendentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [TransformBlendEntityData](/vext/ref/fb/transformblendentitydata). |

### TransformBlendEntityData {#constructor-4}

> **TransformBlendEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [TransformBlendEntityData](/vext/ref/fb/transformblendentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [TransformBlendEntityData](/vext/ref/fb/transformblendentitydata). |

### TransformBlendEntityData {#constructor-5}

> **TransformBlendEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [TransformBlendEntityData](/vext/ref/fb/transformblendentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [TransformBlendEntityData](/vext/ref/fb/transformblendentitydata). |

## Properties

### {{% prop-heading "in2" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**

### {{% prop-heading "in1" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**

### {{% prop-heading "blendValue" %}}

> **float**

### {{% prop-heading "blendValue2" %}}

> **float**

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [TransformBlendEntityData](/vext/ref/fb/transformblendentitydata) type.

