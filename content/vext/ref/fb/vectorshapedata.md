---
title: VectorShapeData
---

Inherits from [BaseShapeData](/vext/ref/fb/baseshapedata)

## Summary

### Constructors

|  |
| --- |
| **[VectorShapeData](#constructor-0)**() |
| **[VectorShapeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VectorShapeData](#constructor-2)**(other: [BaseShapeData](/vext/ref/fb/baseshapedata)) |
| **[VectorShapeData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[VectorShapeData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[VectorShapeData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "points" >}} | [Vec3](/vext/ref/shared/type/vec3)[] |
| {{< prop "normals" >}} | [Vec3](/vext/ref/shared/type/vec3)[] |
| {{< prop "tension" >}} | float |
| {{< prop "isClosed" >}} | bool |
| {{< prop "allowRoll" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VectorShapeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VectorShapeData {#constructor-0}

> **VectorShapeData**()

Creates a new [VectorShapeData](/vext/ref/fb/vectorshapedata) frostbite instance.

### VectorShapeData {#constructor-1}

> **VectorShapeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VectorShapeData](/vext/ref/fb/vectorshapedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VectorShapeData {#constructor-2}

> **VectorShapeData**(other: [BaseShapeData](/vext/ref/fb/baseshapedata))

Casts an instance of type [BaseShapeData](/vext/ref/fb/baseshapedata) to [VectorShapeData](/vext/ref/fb/vectorshapedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [BaseShapeData](/vext/ref/fb/baseshapedata) | The instance to cast to [VectorShapeData](/vext/ref/fb/vectorshapedata). |

### VectorShapeData {#constructor-3}

> **VectorShapeData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [VectorShapeData](/vext/ref/fb/vectorshapedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [VectorShapeData](/vext/ref/fb/vectorshapedata). |

### VectorShapeData {#constructor-4}

> **VectorShapeData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [VectorShapeData](/vext/ref/fb/vectorshapedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [VectorShapeData](/vext/ref/fb/vectorshapedata). |

### VectorShapeData {#constructor-5}

> **VectorShapeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VectorShapeData](/vext/ref/fb/vectorshapedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VectorShapeData](/vext/ref/fb/vectorshapedata). |

## Properties

### {{% prop-heading "points" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**[]

### {{% prop-heading "normals" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**[]

### {{% prop-heading "tension" %}}

> **float**

### {{% prop-heading "isClosed" %}}

> **bool**

### {{% prop-heading "allowRoll" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VectorShapeData](/vext/ref/fb/vectorshapedata) type.

