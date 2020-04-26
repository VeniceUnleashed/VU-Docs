---
title: AnimatedTransformEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[AnimatedTransformEntityData](#constructor-0)**() |
| **[AnimatedTransformEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AnimatedTransformEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[AnimatedTransformEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[AnimatedTransformEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[AnimatedTransformEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "animatable" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "externalTime" >}} | float |
| {{< prop "controller" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "boneName" >}} | string |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AnimatedTransformEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AnimatedTransformEntityData {#constructor-0}

> **AnimatedTransformEntityData**()

Creates a new [AnimatedTransformEntityData](/vext/ref/fb/animatedtransformentitydata) frostbite instance.

### AnimatedTransformEntityData {#constructor-1}

> **AnimatedTransformEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AnimatedTransformEntityData](/vext/ref/fb/animatedtransformentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AnimatedTransformEntityData {#constructor-2}

> **AnimatedTransformEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [AnimatedTransformEntityData](/vext/ref/fb/animatedtransformentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [AnimatedTransformEntityData](/vext/ref/fb/animatedtransformentitydata). |

### AnimatedTransformEntityData {#constructor-3}

> **AnimatedTransformEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [AnimatedTransformEntityData](/vext/ref/fb/animatedtransformentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [AnimatedTransformEntityData](/vext/ref/fb/animatedtransformentitydata). |

### AnimatedTransformEntityData {#constructor-4}

> **AnimatedTransformEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [AnimatedTransformEntityData](/vext/ref/fb/animatedtransformentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [AnimatedTransformEntityData](/vext/ref/fb/animatedtransformentitydata). |

### AnimatedTransformEntityData {#constructor-5}

> **AnimatedTransformEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AnimatedTransformEntityData](/vext/ref/fb/animatedtransformentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AnimatedTransformEntityData](/vext/ref/fb/animatedtransformentitydata). |

## Properties

### {{% prop-heading "animatable" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "externalTime" %}}

> **float**

### {{% prop-heading "controller" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "boneName" %}}

> **string**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AnimatedTransformEntityData](/vext/ref/fb/animatedtransformentitydata) type.

