---
title: UINetworkTextInfo
---


## Summary
### Constructors
| |
| ----------- |
| **[UINetworkTextInfo](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "stringId" >}} | string |
| {{< prop "displayTime" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UINetworkTextInfo](/vext/ref/fb/uinetworktextinfo) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UINetworkTextInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UINetworkTextInfo {#constructor-0}
> **UINetworkTextInfo**()

Creates a new [UINetworkTextInfo](/vext/ref/fb/uinetworktextinfo) frostbite structure.

## Properties
### {{% prop-heading "stringId" %}}
> **string**

### {{% prop-heading "displayTime" %}}
> **float**

## Methods
### Clone
> **Clone**(): [UINetworkTextInfo](/vext/ref/fb/uinetworktextinfo)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UINetworkTextInfo](/vext/ref/fb/uinetworktextinfo)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UINetworkTextInfo](/vext/ref/fb/uinetworktextinfo) type.

