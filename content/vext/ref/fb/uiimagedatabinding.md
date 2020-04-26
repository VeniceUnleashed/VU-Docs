---
title: UIImageDataBinding
---

Inherits from 
[UIDataBinding](/vext/ref/fb/uidatabinding)

## Summary
### Constructors
| |
| ----------- |
| **[UIImageDataBinding](#constructor-0)**() |
| **[UIImageDataBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UIImageDataBinding](#constructor-2)**(other: [UIDataBinding](/vext/ref/fb/uidatabinding)) |
| **[UIImageDataBinding](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "staticImageUrl" >}} | string |
| {{< prop "imageData" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "visibility" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "visible" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIImageDataBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIImageDataBinding {#constructor-0}
> **UIImageDataBinding**()

Creates a new [UIImageDataBinding](/vext/ref/fb/uiimagedatabinding) frostbite instance.

### UIImageDataBinding {#constructor-1}
> **UIImageDataBinding**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UIImageDataBinding](/vext/ref/fb/uiimagedatabinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UIImageDataBinding {#constructor-2}
> **UIImageDataBinding**(other: [UIDataBinding](/vext/ref/fb/uidatabinding))

Casts an instance of type [UIDataBinding](/vext/ref/fb/uidatabinding) to [UIImageDataBinding](/vext/ref/fb/uiimagedatabinding). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIDataBinding](/vext/ref/fb/uidatabinding) | The instance to cast to [UIImageDataBinding](/vext/ref/fb/uiimagedatabinding). |

### UIImageDataBinding {#constructor-3}
> **UIImageDataBinding**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIImageDataBinding](/vext/ref/fb/uiimagedatabinding). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UIImageDataBinding](/vext/ref/fb/uiimagedatabinding). |

## Properties
### {{% prop-heading "staticImageUrl" %}}
> **string**

### {{% prop-heading "imageData" %}}
> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "visibility" %}}
> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "visible" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIImageDataBinding](/vext/ref/fb/uiimagedatabinding) type.

