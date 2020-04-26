---
title: WeaponOverrideValue
---


## Summary
### Constructors
| |
| ----------- |
| **[WeaponOverrideValue](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "valueType" >}} | [WeaponOverrideValueType](/vext/ref/fb/weaponoverridevaluetype) |
| {{< prop "value" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [WeaponOverrideValue](/vext/ref/fb/weaponoverridevalue) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "WeaponOverrideValue" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### WeaponOverrideValue {#constructor-0}
> **WeaponOverrideValue**()

Creates a new [WeaponOverrideValue](/vext/ref/fb/weaponoverridevalue) frostbite structure.

## Properties
### {{% prop-heading "valueType" %}}
> **[WeaponOverrideValueType](/vext/ref/fb/weaponoverridevaluetype)**

### {{% prop-heading "value" %}}
> **float**

## Methods
### Clone
> **Clone**(): [WeaponOverrideValue](/vext/ref/fb/weaponoverridevalue)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[WeaponOverrideValue](/vext/ref/fb/weaponoverridevalue)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [WeaponOverrideValue](/vext/ref/fb/weaponoverridevalue) type.

