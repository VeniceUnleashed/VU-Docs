---
title: Ps3ParentalLockAgeSettings
---


## Summary
### Constructors
| |
| ----------- |
| **[Ps3ParentalLockAgeSettings](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "region" >}} | string |
| {{< prop "ageLevels" >}} | [Ps3AgeLevels](/vext/ref/fb/ps3agelevels) |
| {{< prop "countryOverrides" >}} | [Ps3ParentalLockAgeSettingsOverrides](/vext/ref/fb/ps3parentallockagesettingsoverrides) \| nil |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [Ps3ParentalLockAgeSettings](/vext/ref/fb/ps3parentallockagesettings) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "Ps3ParentalLockAgeSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### Ps3ParentalLockAgeSettings {#constructor-0}
> **Ps3ParentalLockAgeSettings**()

Creates a new [Ps3ParentalLockAgeSettings](/vext/ref/fb/ps3parentallockagesettings) frostbite structure.

## Properties
### {{% prop-heading "region" %}}
> **string**

### {{% prop-heading "ageLevels" %}}
> **[Ps3AgeLevels](/vext/ref/fb/ps3agelevels)**

### {{% prop-heading "countryOverrides" %}}
> **[Ps3ParentalLockAgeSettingsOverrides](/vext/ref/fb/ps3parentallockagesettingsoverrides)** | **nil**

## Methods
### Clone
> **Clone**(): [Ps3ParentalLockAgeSettings](/vext/ref/fb/ps3parentallockagesettings)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[Ps3ParentalLockAgeSettings](/vext/ref/fb/ps3parentallockagesettings)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [Ps3ParentalLockAgeSettings](/vext/ref/fb/ps3parentallockagesettings) type.

