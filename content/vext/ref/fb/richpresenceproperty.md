---
title: RichPresenceProperty
---


## Summary
### Constructors
| |
| ----------- |
| **[RichPresenceProperty](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "propertyType" >}} | [RichPresencePropertyType](/vext/ref/fb/richpresencepropertytype) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [RichPresenceProperty](/vext/ref/fb/richpresenceproperty) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RichPresenceProperty" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RichPresenceProperty {#constructor-0}
> **RichPresenceProperty**()

Creates a new [RichPresenceProperty](/vext/ref/fb/richpresenceproperty) frostbite structure.

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "propertyType" %}}
> **[RichPresencePropertyType](/vext/ref/fb/richpresencepropertytype)**

## Methods
### Clone
> **Clone**(): [RichPresenceProperty](/vext/ref/fb/richpresenceproperty)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[RichPresenceProperty](/vext/ref/fb/richpresenceproperty)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RichPresenceProperty](/vext/ref/fb/richpresenceproperty) type.

