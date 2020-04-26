---
title: LicenseInfo
---

## Summary

### Constructors

|  |
| --- |
| **[LicenseInfo](#constructor-0)**() |
| **[LicenseInfo](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "stagingPlatform" >}} | [GamePlatform](/vext/ref/fb/gameplatform) |
| {{< prop "allowStaging" >}} | bool |
| {{< prop "clientOnly" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [LicenseInfo](/vext/ref/fb/licenseinfo) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "LicenseInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### LicenseInfo {#constructor-0}

> **LicenseInfo**()

Creates a new [LicenseInfo](/vext/ref/fb/licenseinfo) frostbite instance.

### LicenseInfo {#constructor-1}

> **LicenseInfo**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [LicenseInfo](/vext/ref/fb/licenseinfo) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "stagingPlatform" %}}

> **[GamePlatform](/vext/ref/fb/gameplatform)**

### {{% prop-heading "allowStaging" %}}

> **bool**

### {{% prop-heading "clientOnly" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [LicenseInfo](/vext/ref/fb/licenseinfo)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[LicenseInfo](/vext/ref/fb/licenseinfo)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [LicenseInfo](/vext/ref/fb/licenseinfo) type.

