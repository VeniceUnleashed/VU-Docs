---
title: AABBData
---

Inherits from [BaseShapeData](/vext/ref/fb/baseshapedata)

## Summary

### Constructors

|  |
| --- |
| **[AABBData](#constructor-0)**() |
| **[AABBData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AABBData](#constructor-2)**(other: [BaseShapeData](/vext/ref/fb/baseshapedata)) |
| **[AABBData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[AABBData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[AABBData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "position" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "halfExtents" >}} | [Vec3](/vext/ref/shared/type/vec3) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AABBData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AABBData {#constructor-0}

> **AABBData**()

Creates a new [AABBData](/vext/ref/fb/aabbdata) frostbite instance.

### AABBData {#constructor-1}

> **AABBData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AABBData](/vext/ref/fb/aabbdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AABBData {#constructor-2}

> **AABBData**(other: [BaseShapeData](/vext/ref/fb/baseshapedata))

Casts an instance of type [BaseShapeData](/vext/ref/fb/baseshapedata) to [AABBData](/vext/ref/fb/aabbdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [BaseShapeData](/vext/ref/fb/baseshapedata) | The instance to cast to [AABBData](/vext/ref/fb/aabbdata). |

### AABBData {#constructor-3}

> **AABBData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [AABBData](/vext/ref/fb/aabbdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [AABBData](/vext/ref/fb/aabbdata). |

### AABBData {#constructor-4}

> **AABBData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [AABBData](/vext/ref/fb/aabbdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [AABBData](/vext/ref/fb/aabbdata). |

### AABBData {#constructor-5}

> **AABBData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AABBData](/vext/ref/fb/aabbdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AABBData](/vext/ref/fb/aabbdata). |

## Properties

### {{% prop-heading "position" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "halfExtents" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AABBData](/vext/ref/fb/aabbdata) type.

