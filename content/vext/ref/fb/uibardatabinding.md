---
title: UIBarDataBinding
---

Inherits from 
[UIDataBinding](/vext/ref/fb/uidatabinding)

## Summary
### Constructors
| |
| ----------- |
| **[UIBarDataBinding](#constructor-0)**() |
| **[UIBarDataBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UIBarDataBinding](#constructor-2)**(other: [UIDataBinding](/vext/ref/fb/uidatabinding)) |
| **[UIBarDataBinding](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "visibility" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "value" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "color" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "refresh" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIBarDataBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIBarDataBinding {#constructor-0}
> **UIBarDataBinding**()

Creates a new [UIBarDataBinding](/vext/ref/fb/uibardatabinding) frostbite instance.

### UIBarDataBinding {#constructor-1}
> **UIBarDataBinding**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UIBarDataBinding](/vext/ref/fb/uibardatabinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UIBarDataBinding {#constructor-2}
> **UIBarDataBinding**(other: [UIDataBinding](/vext/ref/fb/uidatabinding))

Casts an instance of type [UIDataBinding](/vext/ref/fb/uidatabinding) to [UIBarDataBinding](/vext/ref/fb/uibardatabinding). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIDataBinding](/vext/ref/fb/uidatabinding) | The instance to cast to [UIBarDataBinding](/vext/ref/fb/uibardatabinding). |

### UIBarDataBinding {#constructor-3}
> **UIBarDataBinding**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIBarDataBinding](/vext/ref/fb/uibardatabinding). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UIBarDataBinding](/vext/ref/fb/uibardatabinding). |

## Properties
### {{% prop-heading "visibility" %}}
> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "value" %}}
> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "color" %}}
> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "refresh" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIBarDataBinding](/vext/ref/fb/uibardatabinding) type.

