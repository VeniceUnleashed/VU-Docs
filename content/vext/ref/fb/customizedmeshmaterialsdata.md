---
title: CustomizedMeshMaterialsData
---

## Summary

### Constructors

|  |
| --- |
| **[CustomizedMeshMaterialsData](#constructor-0)**() |
| **[CustomizedMeshMaterialsData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "meshBlueprint" >}} | [ObjectBlueprint](/vext/ref/fb/objectblueprint) \| nil |
| {{< prop "materialNames" >}} | string[] |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [CustomizedMeshMaterialsData](/vext/ref/fb/customizedmeshmaterialsdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CustomizedMeshMaterialsData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CustomizedMeshMaterialsData {#constructor-0}

> **CustomizedMeshMaterialsData**()

Creates a new [CustomizedMeshMaterialsData](/vext/ref/fb/customizedmeshmaterialsdata) frostbite instance.

### CustomizedMeshMaterialsData {#constructor-1}

> **CustomizedMeshMaterialsData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CustomizedMeshMaterialsData](/vext/ref/fb/customizedmeshmaterialsdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "meshBlueprint" %}}

> **[ObjectBlueprint](/vext/ref/fb/objectblueprint)** \| **nil**

### {{% prop-heading "materialNames" %}}

> **string**[]

## Methods

### Clone {#clone}

> **Clone**(): [CustomizedMeshMaterialsData](/vext/ref/fb/customizedmeshmaterialsdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[CustomizedMeshMaterialsData](/vext/ref/fb/customizedmeshmaterialsdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CustomizedMeshMaterialsData](/vext/ref/fb/customizedmeshmaterialsdata) type.

