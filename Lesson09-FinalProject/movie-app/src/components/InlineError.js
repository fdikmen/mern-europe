//Created by [rfc] Snippet
import React from 'react'
import { Message } from 'semantic-ui-react'

export default function InlineError(props) {
    return (
      <div>
        <Message negative size="mini">
          <Message.Header>{props.message}</Message.Header>
        </Message>
      </div>
    );
}