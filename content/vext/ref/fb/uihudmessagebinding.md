---
title: UIHUDMessageBinding
---

Inherits from 
[UIDataBinding](/vext/ref/fb/uidatabinding)

## Summary
### Constructors
| |
| ----------- |
| **[UIHUDMessageBinding](#constructor-0)**() |
| **[UIHUDMessageBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UIHUDMessageBinding](#constructor-2)**(other: [UIDataBinding](/vext/ref/fb/uidatabinding)) |
| **[UIHUDMessageBinding](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "messageQuery" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "visibilityQuery" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "numberOfRows" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIHUDMessageBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIHUDMessageBinding {#constructor-0}
> **UIHUDMessageBinding**()

Creates a new [UIHUDMessageBinding](/vext/ref/fb/uihudmessagebinding) frostbite instance.

### UIHUDMessageBinding {#constructor-1}
> **UIHUDMessageBinding**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UIHUDMessageBinding](/vext/ref/fb/uihudmessagebinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UIHUDMessageBinding {#constructor-2}
> **UIHUDMessageBinding**(other: [UIDataBinding](/vext/ref/fb/uidatabinding))

Casts an instance of type [UIDataBinding](/vext/ref/fb/uidatabinding) to [UIHUDMessageBinding](/vext/ref/fb/uihudmessagebinding). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIDataBinding](/vext/ref/fb/uidatabinding) | The instance to cast to [UIHUDMessageBinding](/vext/ref/fb/uihudmessagebinding). |

### UIHUDMessageBinding {#constructor-3}
> **UIHUDMessageBinding**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIHUDMessageBinding](/vext/ref/fb/uihudmessagebinding). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UIHUDMessageBinding](/vext/ref/fb/uihudmessagebinding). |

## Properties
### {{% prop-heading "messageQuery" %}}
> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "visibilityQuery" %}}
> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "numberOfRows" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIHUDMessageBinding](/vext/ref/fb/uihudmessagebinding) type.

