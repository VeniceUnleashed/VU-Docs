---
title: ServerInfoSetting
---

## Summary

### Constructors

|  |
| --- |
| **[ServerInfoSetting](#constructor-0)**() |
| **[ServerInfoSetting](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "key" >}} | string |
| {{< prop "name" >}} | string |
| {{< prop "isBool" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [ServerInfoSetting](/vext/ref/fb/serverinfosetting) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ServerInfoSetting" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ServerInfoSetting {#constructor-0}

> **ServerInfoSetting**()

Creates a new [ServerInfoSetting](/vext/ref/fb/serverinfosetting) frostbite instance.

### ServerInfoSetting {#constructor-1}

> **ServerInfoSetting**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ServerInfoSetting](/vext/ref/fb/serverinfosetting) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "key" %}}

> **string**

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "isBool" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [ServerInfoSetting](/vext/ref/fb/serverinfosetting)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ServerInfoSetting](/vext/ref/fb/serverinfosetting)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ServerInfoSetting](/vext/ref/fb/serverinfosetting) type.

