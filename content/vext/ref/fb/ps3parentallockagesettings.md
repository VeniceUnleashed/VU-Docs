---
title: Ps3ParentalLockAgeSettings
---

## Summary

### Constructors

|  |
| --- |
| **[Ps3ParentalLockAgeSettings](#constructor-0)**() |
| **[Ps3ParentalLockAgeSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "region" >}} | string |
| {{< prop "ageLevels" >}} | [Ps3AgeLevels](/vext/ref/fb/ps3agelevels) |
| {{< prop "countryOverrides" >}} | [Ps3ParentalLockAgeSettingsOverrides](/vext/ref/fb/ps3parentallockagesettingsoverrides) \| nil |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [Ps3ParentalLockAgeSettings](/vext/ref/fb/ps3parentallockagesettings) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "Ps3ParentalLockAgeSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### Ps3ParentalLockAgeSettings {#constructor-0}

> **Ps3ParentalLockAgeSettings**()

Creates a new [Ps3ParentalLockAgeSettings](/vext/ref/fb/ps3parentallockagesettings) frostbite instance.

### Ps3ParentalLockAgeSettings {#constructor-1}

> **Ps3ParentalLockAgeSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [Ps3ParentalLockAgeSettings](/vext/ref/fb/ps3parentallockagesettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "region" %}}

> **string**

### {{% prop-heading "ageLevels" %}}

> **[Ps3AgeLevels](/vext/ref/fb/ps3agelevels)**

### {{% prop-heading "countryOverrides" %}}

> **[Ps3ParentalLockAgeSettingsOverrides](/vext/ref/fb/ps3parentallockagesettingsoverrides)** \| **nil**

## Methods

### Clone {#clone}

> **Clone**(): [Ps3ParentalLockAgeSettings](/vext/ref/fb/ps3parentallockagesettings)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Ps3ParentalLockAgeSettings](/vext/ref/fb/ps3parentallockagesettings)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [Ps3ParentalLockAgeSettings](/vext/ref/fb/ps3parentallockagesettings) type.

