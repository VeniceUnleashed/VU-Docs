---
title: RichPresenceContextSetting
---


## Summary
### Constructors
| |
| ----------- |
| **[RichPresenceContextSetting](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "context" >}} | [RichPresenceContext](/vext/ref/fb/richpresencecontext) \| nil |
| {{< prop "value" >}} | [RichPresenceContextValue](/vext/ref/fb/richpresencecontextvalue) \| nil |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [RichPresenceContextSetting](/vext/ref/fb/richpresencecontextsetting) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RichPresenceContextSetting" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RichPresenceContextSetting {#constructor-0}
> **RichPresenceContextSetting**()

Creates a new [RichPresenceContextSetting](/vext/ref/fb/richpresencecontextsetting) frostbite structure.

## Properties
### {{% prop-heading "context" %}}
> **[RichPresenceContext](/vext/ref/fb/richpresencecontext)** | **nil**

### {{% prop-heading "value" %}}
> **[RichPresenceContextValue](/vext/ref/fb/richpresencecontextvalue)** | **nil**

## Methods
### Clone
> **Clone**(): [RichPresenceContextSetting](/vext/ref/fb/richpresencecontextsetting)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[RichPresenceContextSetting](/vext/ref/fb/richpresencecontextsetting)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RichPresenceContextSetting](/vext/ref/fb/richpresencecontextsetting) type.

