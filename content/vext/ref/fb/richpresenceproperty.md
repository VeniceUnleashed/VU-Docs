---
title: RichPresenceProperty
---

## Summary

### Constructors

|  |
| --- |
| **[RichPresenceProperty](#constructor-0)**() |
| **[RichPresenceProperty](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "propertyType" >}} | [RichPresencePropertyType](/vext/ref/fb/richpresencepropertytype) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [RichPresenceProperty](/vext/ref/fb/richpresenceproperty) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "RichPresenceProperty" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### RichPresenceProperty {#constructor-0}

> **RichPresenceProperty**()

Creates a new [RichPresenceProperty](/vext/ref/fb/richpresenceproperty) frostbite instance.

### RichPresenceProperty {#constructor-1}

> **RichPresenceProperty**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [RichPresenceProperty](/vext/ref/fb/richpresenceproperty) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "propertyType" %}}

> **[RichPresencePropertyType](/vext/ref/fb/richpresencepropertytype)**

## Methods

### Clone {#clone}

> **Clone**(): [RichPresenceProperty](/vext/ref/fb/richpresenceproperty)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[RichPresenceProperty](/vext/ref/fb/richpresenceproperty)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [RichPresenceProperty](/vext/ref/fb/richpresenceproperty) type.

