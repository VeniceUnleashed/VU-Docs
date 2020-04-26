---
title: NetworkVoteDetails
---


## Summary
### Constructors
| |
| ----------- |
| **[NetworkVoteDetails](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "issuer" >}} | int |
| {{< prop "personal" >}} | bool |
| {{< prop "voteId" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [NetworkVoteDetails](/vext/ref/fb/networkvotedetails) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "NetworkVoteDetails" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### NetworkVoteDetails {#constructor-0}
> **NetworkVoteDetails**()

Creates a new [NetworkVoteDetails](/vext/ref/fb/networkvotedetails) frostbite structure.

## Properties
### {{% prop-heading "issuer" %}}
> **int**

### {{% prop-heading "personal" %}}
> **bool**

### {{% prop-heading "voteId" %}}
> **int**

## Methods
### Clone
> **Clone**(): [NetworkVoteDetails](/vext/ref/fb/networkvotedetails)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[NetworkVoteDetails](/vext/ref/fb/networkvotedetails)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [NetworkVoteDetails](/vext/ref/fb/networkvotedetails) type.

