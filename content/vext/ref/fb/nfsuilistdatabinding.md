---
title: NFSUIListDataBinding
---

Inherits from 
[UIDataBinding](/vext/ref/fb/uidatabinding)

## Summary
### Constructors
| |
| ----------- |
| **[NFSUIListDataBinding](#constructor-0)**() |
| **[NFSUIListDataBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[NFSUIListDataBinding](#constructor-2)**(other: [UIDataBinding](/vext/ref/fb/uidatabinding)) |
| **[NFSUIListDataBinding](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "refresh" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "items" >}} | [UIListItem](/vext/ref/fb/uilistitem)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "NFSUIListDataBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### NFSUIListDataBinding {#constructor-0}
> **NFSUIListDataBinding**()

Creates a new [NFSUIListDataBinding](/vext/ref/fb/nfsuilistdatabinding) frostbite instance.

### NFSUIListDataBinding {#constructor-1}
> **NFSUIListDataBinding**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [NFSUIListDataBinding](/vext/ref/fb/nfsuilistdatabinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### NFSUIListDataBinding {#constructor-2}
> **NFSUIListDataBinding**(other: [UIDataBinding](/vext/ref/fb/uidatabinding))

Casts an instance of type [UIDataBinding](/vext/ref/fb/uidatabinding) to [NFSUIListDataBinding](/vext/ref/fb/nfsuilistdatabinding). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIDataBinding](/vext/ref/fb/uidatabinding) | The instance to cast to [NFSUIListDataBinding](/vext/ref/fb/nfsuilistdatabinding). |

### NFSUIListDataBinding {#constructor-3}
> **NFSUIListDataBinding**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [NFSUIListDataBinding](/vext/ref/fb/nfsuilistdatabinding). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [NFSUIListDataBinding](/vext/ref/fb/nfsuilistdatabinding). |

## Properties
### {{% prop-heading "refresh" %}}
> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "items" %}}
> **[UIListItem](/vext/ref/fb/uilistitem)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [NFSUIListDataBinding](/vext/ref/fb/nfsuilistdatabinding) type.

