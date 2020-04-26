---
title: AntEnumeration
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[AntEnumeration](#constructor-0)**() |
| **[AntEnumeration](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[AntEnumeration](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "antAsset" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "value" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AntEnumeration" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AntEnumeration {#constructor-0}
> **AntEnumeration**()

Creates a new [AntEnumeration](/vext/ref/fb/antenumeration) frostbite instance.

### AntEnumeration {#constructor-1}
> **AntEnumeration**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [AntEnumeration](/vext/ref/fb/antenumeration) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### AntEnumeration {#constructor-2}
> **AntEnumeration**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AntEnumeration](/vext/ref/fb/antenumeration). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [AntEnumeration](/vext/ref/fb/antenumeration). |

## Properties
### {{% prop-heading "antAsset" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "value" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AntEnumeration](/vext/ref/fb/antenumeration) type.

