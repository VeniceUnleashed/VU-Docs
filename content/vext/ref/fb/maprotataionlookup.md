---
title: MapRotataionLookup
---

## Summary

### Constructors

|  |
| --- |
| **[MapRotataionLookup](#constructor-0)**() |
| **[MapRotataionLookup](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "gameMode" >}} | string |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [MapRotataionLookup](/vext/ref/fb/maprotataionlookup) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MapRotataionLookup" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MapRotataionLookup {#constructor-0}

> **MapRotataionLookup**()

Creates a new [MapRotataionLookup](/vext/ref/fb/maprotataionlookup) frostbite instance.

### MapRotataionLookup {#constructor-1}

> **MapRotataionLookup**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MapRotataionLookup](/vext/ref/fb/maprotataionlookup) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "gameMode" %}}

> **string**

## Methods

### Clone {#clone}

> **Clone**(): [MapRotataionLookup](/vext/ref/fb/maprotataionlookup)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[MapRotataionLookup](/vext/ref/fb/maprotataionlookup)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MapRotataionLookup](/vext/ref/fb/maprotataionlookup) type.

