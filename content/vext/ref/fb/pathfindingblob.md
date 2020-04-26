---
title: PathfindingBlob
---

## Summary

### Constructors

|  |
| --- |
| **[PathfindingBlob](#constructor-0)**() |
| **[PathfindingBlob](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "blobId" >}} | [Guid](/vext/ref/shared/type/guid) |
| {{< prop "blobSize" >}} | int |
| {{< prop "chunkSizes" >}} | int[] |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [PathfindingBlob](/vext/ref/fb/pathfindingblob) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PathfindingBlob" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PathfindingBlob {#constructor-0}

> **PathfindingBlob**()

Creates a new [PathfindingBlob](/vext/ref/fb/pathfindingblob) frostbite instance.

### PathfindingBlob {#constructor-1}

> **PathfindingBlob**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PathfindingBlob](/vext/ref/fb/pathfindingblob) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "blobId" %}}

> **[Guid](/vext/ref/shared/type/guid)**

### {{% prop-heading "blobSize" %}}

> **int**

### {{% prop-heading "chunkSizes" %}}

> **int**[]

## Methods

### Clone {#clone}

> **Clone**(): [PathfindingBlob](/vext/ref/fb/pathfindingblob)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[PathfindingBlob](/vext/ref/fb/pathfindingblob)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PathfindingBlob](/vext/ref/fb/pathfindingblob) type.

