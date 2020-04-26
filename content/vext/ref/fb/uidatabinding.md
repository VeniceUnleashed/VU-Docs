---
title: UIDataBinding
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[UIDataBinding](#constructor-0)**() |
| **[UIDataBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UIDataBinding](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIDataBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIDataBinding {#constructor-0}
> **UIDataBinding**()

Creates a new [UIDataBinding](/vext/ref/fb/uidatabinding) frostbite instance.

### UIDataBinding {#constructor-1}
> **UIDataBinding**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UIDataBinding](/vext/ref/fb/uidatabinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UIDataBinding {#constructor-2}
> **UIDataBinding**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIDataBinding](/vext/ref/fb/uidatabinding). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UIDataBinding](/vext/ref/fb/uidatabinding). |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIDataBinding](/vext/ref/fb/uidatabinding) type.

