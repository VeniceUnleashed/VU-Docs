---
title: UINametag
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[UINametag](#constructor-0)**() |
| **[UINametag](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UINametag](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "textColor" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "iconFadeDistance" >}} | float |
| {{< prop "iconMaxDistance" >}} | float |
| {{< prop "icon" >}} | [UIHudIcon](/vext/ref/fb/uihudicon) |
| {{< prop "textFadeDistance" >}} | float |
| {{< prop "healthFadeDistance" >}} | float |
| {{< prop "healthMaxDistance" >}} | float |
| {{< prop "textMaxDistance" >}} | float |
| {{< prop "targetInTimer" >}} | float |
| {{< prop "targetOutTimer" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UINametag" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UINametag {#constructor-0}
> **UINametag**()

Creates a new [UINametag](/vext/ref/fb/uinametag) frostbite instance.

### UINametag {#constructor-1}
> **UINametag**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UINametag](/vext/ref/fb/uinametag) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UINametag {#constructor-2}
> **UINametag**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UINametag](/vext/ref/fb/uinametag). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UINametag](/vext/ref/fb/uinametag). |

## Properties
### {{% prop-heading "textColor" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "iconFadeDistance" %}}
> **float**

### {{% prop-heading "iconMaxDistance" %}}
> **float**

### {{% prop-heading "icon" %}}
> **[UIHudIcon](/vext/ref/fb/uihudicon)**

### {{% prop-heading "textFadeDistance" %}}
> **float**

### {{% prop-heading "healthFadeDistance" %}}
> **float**

### {{% prop-heading "healthMaxDistance" %}}
> **float**

### {{% prop-heading "textMaxDistance" %}}
> **float**

### {{% prop-heading "targetInTimer" %}}
> **float**

### {{% prop-heading "targetOutTimer" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UINametag](/vext/ref/fb/uinametag) type.

