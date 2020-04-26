---
title: EntryComponentHudData
---

## Summary

### Constructors

|  |
| --- |
| **[EntryComponentHudData](#constructor-0)**() |
| **[EntryComponentHudData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "index" >}} | int |
| {{< prop "seatType" >}} | [EntrySeatType](/vext/ref/fb/entryseattype) |
| {{< prop "frustum" >}} | bool |
| {{< prop "visible" >}} | bool |
| {{< prop "maximizeMiniMapOnEntry" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [EntryComponentHudData](/vext/ref/fb/entrycomponenthuddata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EntryComponentHudData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EntryComponentHudData {#constructor-0}

> **EntryComponentHudData**()

Creates a new [EntryComponentHudData](/vext/ref/fb/entrycomponenthuddata) frostbite instance.

### EntryComponentHudData {#constructor-1}

> **EntryComponentHudData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EntryComponentHudData](/vext/ref/fb/entrycomponenthuddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "index" %}}

> **int**

### {{% prop-heading "seatType" %}}

> **[EntrySeatType](/vext/ref/fb/entryseattype)**

### {{% prop-heading "frustum" %}}

> **bool**

### {{% prop-heading "visible" %}}

> **bool**

### {{% prop-heading "maximizeMiniMapOnEntry" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [EntryComponentHudData](/vext/ref/fb/entrycomponenthuddata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[EntryComponentHudData](/vext/ref/fb/entrycomponenthuddata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EntryComponentHudData](/vext/ref/fb/entrycomponenthuddata) type.

