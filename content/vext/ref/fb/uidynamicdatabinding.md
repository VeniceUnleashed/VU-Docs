---
title: UIDynamicDataBinding
---

Inherits from 
[UIDataBinding](/vext/ref/fb/uidatabinding)

## Summary
### Constructors
| |
| ----------- |
| **[UIDynamicDataBinding](#constructor-0)**() |
| **[UIDynamicDataBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UIDynamicDataBinding](#constructor-2)**(other: [UIDataBinding](/vext/ref/fb/uidatabinding)) |
| **[UIDynamicDataBinding](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "bindings" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)[] |
| {{< prop "refresh" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIDynamicDataBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIDynamicDataBinding {#constructor-0}
> **UIDynamicDataBinding**()

Creates a new [UIDynamicDataBinding](/vext/ref/fb/uidynamicdatabinding) frostbite instance.

### UIDynamicDataBinding {#constructor-1}
> **UIDynamicDataBinding**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UIDynamicDataBinding](/vext/ref/fb/uidynamicdatabinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UIDynamicDataBinding {#constructor-2}
> **UIDynamicDataBinding**(other: [UIDataBinding](/vext/ref/fb/uidatabinding))

Casts an instance of type [UIDataBinding](/vext/ref/fb/uidatabinding) to [UIDynamicDataBinding](/vext/ref/fb/uidynamicdatabinding). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIDataBinding](/vext/ref/fb/uidatabinding) | The instance to cast to [UIDynamicDataBinding](/vext/ref/fb/uidynamicdatabinding). |

### UIDynamicDataBinding {#constructor-3}
> **UIDynamicDataBinding**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIDynamicDataBinding](/vext/ref/fb/uidynamicdatabinding). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UIDynamicDataBinding](/vext/ref/fb/uidynamicdatabinding). |

## Properties
### {{% prop-heading "bindings" %}}
> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**[]

### {{% prop-heading "refresh" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIDynamicDataBinding](/vext/ref/fb/uidynamicdatabinding) type.

