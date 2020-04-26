---
title: Ps3SkuSettings
---

## Summary

### Constructors

|  |
| --- |
| **[Ps3SkuSettings](#constructor-0)**() |
| **[Ps3SkuSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "titleId" >}} | string |
| {{< prop "spId" >}} | string |
| {{< prop "grantsOnlinePass" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [Ps3SkuSettings](/vext/ref/fb/ps3skusettings) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "Ps3SkuSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### Ps3SkuSettings {#constructor-0}

> **Ps3SkuSettings**()

Creates a new [Ps3SkuSettings](/vext/ref/fb/ps3skusettings) frostbite instance.

### Ps3SkuSettings {#constructor-1}

> **Ps3SkuSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [Ps3SkuSettings](/vext/ref/fb/ps3skusettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "titleId" %}}

> **string**

### {{% prop-heading "spId" %}}

> **string**

### {{% prop-heading "grantsOnlinePass" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [Ps3SkuSettings](/vext/ref/fb/ps3skusettings)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Ps3SkuSettings](/vext/ref/fb/ps3skusettings)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [Ps3SkuSettings](/vext/ref/fb/ps3skusettings) type.

