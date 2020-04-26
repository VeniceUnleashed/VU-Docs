---
title: EulerTransformEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[EulerTransformEntityData](#constructor-0)**() |
| **[EulerTransformEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[EulerTransformEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[EulerTransformEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[EulerTransformEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[EulerTransformEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "in1" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "inValue" >}} | float |
| {{< prop "euler" >}} | [ModifierEuler](/vext/ref/fb/modifiereuler) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EulerTransformEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EulerTransformEntityData {#constructor-0}

> **EulerTransformEntityData**()

Creates a new [EulerTransformEntityData](/vext/ref/fb/eulertransformentitydata) frostbite instance.

### EulerTransformEntityData {#constructor-1}

> **EulerTransformEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EulerTransformEntityData](/vext/ref/fb/eulertransformentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### EulerTransformEntityData {#constructor-2}

> **EulerTransformEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [EulerTransformEntityData](/vext/ref/fb/eulertransformentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [EulerTransformEntityData](/vext/ref/fb/eulertransformentitydata). |

### EulerTransformEntityData {#constructor-3}

> **EulerTransformEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [EulerTransformEntityData](/vext/ref/fb/eulertransformentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [EulerTransformEntityData](/vext/ref/fb/eulertransformentitydata). |

### EulerTransformEntityData {#constructor-4}

> **EulerTransformEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [EulerTransformEntityData](/vext/ref/fb/eulertransformentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [EulerTransformEntityData](/vext/ref/fb/eulertransformentitydata). |

### EulerTransformEntityData {#constructor-5}

> **EulerTransformEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [EulerTransformEntityData](/vext/ref/fb/eulertransformentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [EulerTransformEntityData](/vext/ref/fb/eulertransformentitydata). |

## Properties

### {{% prop-heading "in1" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "inValue" %}}

> **float**

### {{% prop-heading "euler" %}}

> **[ModifierEuler](/vext/ref/fb/modifiereuler)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EulerTransformEntityData](/vext/ref/fb/eulertransformentitydata) type.

