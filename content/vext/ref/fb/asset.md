---
title: Asset
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[Asset](#constructor-0)**() |
| **[Asset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[Asset](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "Asset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### Asset {#constructor-0}
> **Asset**()

Creates a new [Asset](/vext/ref/fb/asset) frostbite instance.

### Asset {#constructor-1}
> **Asset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [Asset](/vext/ref/fb/asset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### Asset {#constructor-2}
> **Asset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [Asset](/vext/ref/fb/asset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [Asset](/vext/ref/fb/asset). |

## Properties
### {{% prop-heading "name" %}}
> **string**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [Asset](/vext/ref/fb/asset) type.

