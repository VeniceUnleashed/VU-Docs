---
title: Ps3ParentalLockAgeSettingsForCountry
---

## Summary

### Constructors

|  |
| --- |
| **[Ps3ParentalLockAgeSettingsForCountry](#constructor-0)**() |
| **[Ps3ParentalLockAgeSettingsForCountry](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "countryCode" >}} | string |
| {{< prop "ageLevels" >}} | [Ps3AgeLevels](/vext/ref/fb/ps3agelevels) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [Ps3ParentalLockAgeSettingsForCountry](/vext/ref/fb/ps3parentallockagesettingsforcountry) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "Ps3ParentalLockAgeSettingsForCountry" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### Ps3ParentalLockAgeSettingsForCountry {#constructor-0}

> **Ps3ParentalLockAgeSettingsForCountry**()

Creates a new [Ps3ParentalLockAgeSettingsForCountry](/vext/ref/fb/ps3parentallockagesettingsforcountry) frostbite instance.

### Ps3ParentalLockAgeSettingsForCountry {#constructor-1}

> **Ps3ParentalLockAgeSettingsForCountry**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [Ps3ParentalLockAgeSettingsForCountry](/vext/ref/fb/ps3parentallockagesettingsforcountry) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "countryCode" %}}

> **string**

### {{% prop-heading "ageLevels" %}}

> **[Ps3AgeLevels](/vext/ref/fb/ps3agelevels)**

## Methods

### Clone {#clone}

> **Clone**(): [Ps3ParentalLockAgeSettingsForCountry](/vext/ref/fb/ps3parentallockagesettingsforcountry)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Ps3ParentalLockAgeSettingsForCountry](/vext/ref/fb/ps3parentallockagesettingsforcountry)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [Ps3ParentalLockAgeSettingsForCountry](/vext/ref/fb/ps3parentallockagesettingsforcountry) type.

